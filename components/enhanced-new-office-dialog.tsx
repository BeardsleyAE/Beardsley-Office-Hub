"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Plus, Building, MapPin, Phone, Clock, Wifi, Upload, ImageIcon, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addNewLocation } from "@/lib/data"
import { addEmployeeToMapping, getVantagePointUrl, getPhotoUrl } from "@/lib/employee-data"

interface EnhancedNewOfficeDialogProps {
  onOfficeAdded: () => void
  buttonProps?: any
}

export function EnhancedNewOfficeDialog({ onOfficeAdded, buttonProps = {} }: EnhancedNewOfficeDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [csvData, setCsvData] = useState("")
  const [csvFile, setCsvFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const csvFileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
    wifi: "",
    image: null as File | null,
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCsvFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setCsvData(e.target?.result as string)
      }
      reader.readAsText(file)
    }
  }

  const processEmployeesFromCsv = (csvData: string) => {
    const employees: any[] = []
    
    try {
      const lines = csvData.trim().split('\n')
      if (lines.length < 2) return employees
      
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
      
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''))
        if (values.length < headers.length) continue
        
        const empObj: any = {}
        headers.forEach((header, index) => {
          empObj[header] = values[index] || ""
        })
        
        const employeeName = empObj.name || empObj.fullname || empObj["full name"] || `Employee ${i}`
        const employeeNumber = empObj.employeenumber || empObj["employee number"] || empObj.number || empObj.id || ""
        
        // Add to employee mapping if employee number exists
        if (employeeNumber && employeeName) {
          addEmployeeToMapping(employeeName, employeeNumber)
        }
        
        const employee = {
          id: `emp-${Date.now()}-${i}`,
          name: employeeName,
          title: empObj.title || empObj.position || empObj.role || "Employee",
          email: empObj.email || empObj["email address"] || `${employeeName.toLowerCase().replace(/\s+/g, ".")}@beardsley.com`,
          phone: empObj.phone || empObj["phone number"] || empObj.telephone || "",
          employeeNumber: employeeNumber,
          profileUrl: employeeNumber ? getVantagePointUrl(employeeName) : "#",
          avatar: getPhotoUrl(employeeName),
          notes: empObj.notes || empObj.description || `Imported from CSV on ${new Date().toLocaleDateString()}.`,
        }
        
        employees.push(employee)
      }
    } catch (error) {
      console.error("Error processing CSV:", error)
    }
    
    return employees
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Convert image to base64 if provided
      let imageDataUrl = "/placeholder.svg?height=200&width=400"
      if (formData.image) {
        const reader = new FileReader()
        imageDataUrl = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result as string)
          reader.readAsDataURL(formData.image!)
        })
      }

      // Process employees from CSV if provided
      const employees = csvData ? processEmployeesFromCsv(csvData) : []
      
      // Create seats for employees (plus some extra empty seats)
      const totalSeats = Math.max(employees.length + 5, 10) // At least 10 seats
      const seats = Array.from({ length: totalSeats }, (_, index) => ({
        id: `seat-${index + 1}`,
        x: 110 + (index % 5) * 80,
        y: 220 + Math.floor(index / 5) * 80,
        rotation: 0,
        furnitureId: index < 5 ? `desk-${index + 2}` : null,
        employee: index < employees.length ? employees[index] : null,
      }))

      // Create new location data structure
      const newLocation = {
        id: formData.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
        name: formData.name,
        address: formData.address,
        image: imageDataUrl,
        phone: formData.phone,
        hours: formData.hours,
        wifi: formData.wifi || `${formData.name}-Office-Net`,
        amenitiesList: [
          { name: "Printers" },
          { name: "Restrooms" },
          { name: "Emergency Exits" },
          { name: "Kitchen" },
          { name: "Conference Rooms" },
          { name: "Wi-Fi" },
        ],
        quickLinks: [
          { name: "IT Support", url: "#" },
          { name: "Book Room", url: "#" },
          { name: "Report Issue", url: "#" },
        ],
        floors: [
          {
            id: "floor-1",
            name: "Floor 1",
            rooms: [
              { id: "room-1", name: "Reception", x: 50, y: 50, width: 200, height: 100, type: "reception" },
              { id: "room-2", name: "Open Space", x: 50, y: 170, width: 400, height: 250, type: "office" },
              { id: "room-3", name: "Conference Room", x: 300, y: 50, width: 150, height: 100, type: "conference" },
            ],
            furniture: [
              // Default furniture layout
              { id: "desk-1", type: "desk", x: 120, y: 80, width: 60, height: 40, rotation: 0 },
              { id: "desk-2", type: "desk", x: 80, y: 200, width: 60, height: 40, rotation: 0 },
              { id: "desk-3", type: "desk", x: 160, y: 200, width: 60, height: 40, rotation: 0 },
              { id: "desk-4", type: "desk", x: 240, y: 200, width: 60, height: 40, rotation: 0 },
              { id: "desk-5", type: "desk", x: 320, y: 200, width: 60, height: 40, rotation: 0 },
              { id: "table-1", type: "table", x: 315, y: 75, width: 120, height: 50, rotation: 0 },
            ],
            amenities: [
              {
                id: "printer-1",
                type: "printer",
                name: "Office Printer",
                ipAddress: "192.168.1.101",
                queueName: "OFFICE-PRINT-01",
                status: "Online",
                x: 400,
                y: 120,
              },
              { id: "restroom-1", type: "restroom", name: "Restroom", x: 400, y: 50 },
              { id: "exit-1", type: "exit", name: "Emergency Exit", x: 470, y: 50 },
              { id: "kitchen-1", type: "kitchen", name: "Kitchen", x: 470, y: 120 },
            ],
            seats: seats,
          },
        ],
      }

      const success = addNewLocation(newLocation)

      if (success) {
        // Reset form
        setFormData({
          name: "",
          address: "",
          phone: "",
          hours: "Mon-Fri: 8:00 AM - 5:00 PM",
          wifi: "",
          image: null,
        })
        setImagePreview(null)
        setCsvData("")
        setCsvFile(null)
        if (csvFileInputRef.current) csvFileInputRef.current.value = ""

        setIsOpen(false)
        onOfficeAdded()
        
        if (employees.length > 0) {
          alert(`Office created successfully with ${employees.length} employees imported from CSV!`)
        }
      } else {
        alert("Failed to create office. An office with this name may already exist.")
      }
    } catch (error) {
      console.error("Error creating office:", error)
      alert("Failed to create office. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-beardsley-orange hover:bg-beardsley-orange-dark text-white text-lg px-8 py-6 h-auto font-whitney shadow-lg"
          {...buttonProps}
        >
          <Plus className="mr-2 h-5 w-5" />
          Create New Office
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-beardsley-red text-xl">
            <Building className="h-6 w-6" />
            Create New Office
          </DialogTitle>
          <DialogDescription className="text-base">
            Add a new office location to the system. You can customize the layout and add employees later, or upload a CSV file to import employees now.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Office Image Upload */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-base font-medium">
              <ImageIcon className="h-4 w-4 text-beardsley-red" />
              Office Image
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-beardsley-red transition-colors">
              {imagePreview ? (
                <div className="space-y-3">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Office preview"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setImagePreview(null)
                      setFormData((prev) => ({ ...prev, image: null }))
                      if (fileInputRef.current) fileInputRef.current.value = ""
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                  <div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isLoading}
                    >
                      Upload Image
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG up to 5MB</p>
                  </div>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Employee CSV Upload */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-base font-medium">
              <Users className="h-4 w-4 text-beardsley-red" />
              Employee Data (Optional)
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-beardsley-orange transition-colors">
              {csvFile ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-beardsley-orange">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">{csvFile.name}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {csvData.split('\n').length - 1} employees will be imported
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCsvFile(null)
                      setCsvData("")
                      if (csvFileInputRef.current) csvFileInputRef.current.value = ""
                    }}
                  >
                    Remove CSV
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                  <div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => csvFileInputRef.current?.click()}
                      disabled={isLoading}
                    >
                      Upload Employee CSV
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      CSV with columns: name, title, email, phone, employeeNumber
                    </p>
                  </div>
                </div>
              )}
              <input
                ref={csvFileInputRef}
                type="file"
                accept=".csv"
                onChange={handleCsvUpload}
                className="hidden"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="office-name" className="flex items-center gap-2 text-base font-medium">
              <Building className="h-4 w-4 text-beardsley-red" />
              Office Name *
            </Label>
            <Input
              id="office-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="e.g., Rochester Office"
              required
              disabled={isLoading}
              className="text-base"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="office-address" className="flex items-center gap-2 text-base font-medium">
              <MapPin className="h-4 w-4 text-beardsley-red" />
              Address *
            </Label>
            <Textarea
              id="office-address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="123 Main Street, City, State 12345"
              required
              disabled={isLoading}
              rows={3}
              className="text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label htmlFor="office-phone" className="flex items-center gap-2 text-base font-medium">
                <Phone className="h-4 w-4 text-beardsley-red" />
                Phone Number
              </Label>
              <Input
                id="office-phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                disabled={isLoading}
                className="text-base"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="office-wifi" className="flex items-center gap-2 text-base font-medium">
                <Wifi className="h-4 w-4 text-beardsley-red" />
                Wi-Fi Network
              </Label>
              <Input
                id="office-wifi"
                value={formData.wifi}
                onChange={(e) => handleInputChange("wifi", e.target.value)}
                placeholder="Office-Guest"
                disabled={isLoading}
                className="text-base"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="office-hours" className="flex items-center gap-2 text-base font-medium">
              <Clock className="h-4 w-4 text-beardsley-red" />
              Business Hours
            </Label>
            <Input
              id="office-hours"
              value={formData.hours}
              onChange={(e) => handleInputChange("hours", e.target.value)}
              placeholder="Mon-Fri: 8:00 AM - 5:00 PM"
              disabled={isLoading}
              className="text-base"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || !formData.name.trim() || !formData.address.trim()}
              className="flex-1 bg-beardsley-red hover:bg-beardsley-red-dark"
            >
              {isLoading ? "Creating..." : "Create Office"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
