// Auto-generated office seating data - Last updated: 2025-06-12T19:44:32.911Z
// This file is automatically updated when admins make changes through the Office Hub

// Storage key for localStorage
const STORAGE_KEY = "office-seating-charts-data"

// Default location data (updated from admin panel)
const defaultLocations = {
  "syracuse": {
    "id": "syracuse",
    "name": "Syracuse Office",
    "address": "1115 Solar Street, Ste 102 Syracuse, NY 13204",
    "image": "/SyracuseOffice.jpg",
    "phone": "315-472-6980",
    "hours": "Mon-Fri: 8:00 AM - 5:00 PM",
    "wifi": "Syracuse-Office-Net",
    "amenitiesList": [
      {
        "name": "Printers (4)"
      },
      {
        "name": "Restrooms"
      },
      {
        "name": "Emergency Exits"
      },
      {
        "name": "Kitchen/Café"
      },
      {
        "name": "Conference Rooms (6)"
      },
      {
        "name": "Wi-Fi"
      }
    ],
    "quickLinks": [
      {
        "name": "IT Support",
        "url": "#"
      },
      {
        "name": "Book Room",
        "url": "#"
      },
      {
        "name": "Report Issue",
        "url": "#"
      }
    ],
    "floors": [
      {
        "id": "floor-1",
        "name": "Floor 1",
        "rooms": [
          {
            "id": "room-1",
            "name": "Reception",
            "x": 50,
            "y": 50,
            "width": 200,
            "height": 100,
            "type": "reception"
          },
          {
            "id": "room-2",
            "name": "Open Space",
            "x": 50,
            "y": 170,
            "width": 500,
            "height": 300,
            "type": "office"
          },
          {
            "id": "room-3",
            "name": "Meeting Room A",
            "x": 300,
            "y": 50,
            "width": 150,
            "height": 100,
            "type": "conference"
          },
          {
            "id": "room-4",
            "name": "Meeting Room B",
            "x": 470,
            "y": 50,
            "width": 150,
            "height": 100,
            "type": "conference"
          }
        ],
        "furniture": [
          {
            "id": "desk-1",
            "type": "desk",
            "x": 120,
            "y": 80,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "chair-1",
            "type": "chair",
            "x": 140,
            "y": 125,
            "width": 20,
            "height": 20,
            "rotation": 0
          },
          {
            "id": "desk-2",
            "type": "desk",
            "x": 80,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-3",
            "type": "desk",
            "x": 160,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-4",
            "type": "desk",
            "x": 240,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-5",
            "type": "desk",
            "x": 320,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-6",
            "type": "desk",
            "x": 400,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-7",
            "type": "desk",
            "x": 80,
            "y": 280,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-8",
            "type": "desk",
            "x": 160,
            "y": 280,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-9",
            "type": "desk",
            "x": 240,
            "y": 280,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-10",
            "type": "desk",
            "x": 320,
            "y": 280,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-11",
            "type": "desk",
            "x": 400,
            "y": 280,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "table-1",
            "type": "table",
            "x": 315,
            "y": 75,
            "width": 120,
            "height": 50,
            "rotation": 0
          },
          {
            "id": "table-2",
            "type": "table",
            "x": 485,
            "y": 75,
            "width": 120,
            "height": 50,
            "rotation": 0
          },
          {
            "id": "cabinet-1",
            "type": "cabinet",
            "x": 480,
            "y": 200,
            "width": 40,
            "height": 30,
            "rotation": 0
          },
          {
            "id": "cabinet-2",
            "type": "cabinet",
            "x": 480,
            "y": 240,
            "width": 40,
            "height": 30,
            "rotation": 0
          }
        ],
        "amenities": [
          {
            "id": "printer-1",
            "type": "printer",
            "name": "HP LaserJet Pro",
            "ipAddress": "192.168.1.101",
            "queueName": "SYR-PRINT-01",
            "status": "Online",
            "x": 450,
            "y": 120
          },
          {
            "id": "restroom-1",
            "type": "restroom",
            "name": "Restroom",
            "x": 450,
            "y": 50
          },
          {
            "id": "exit-1",
            "type": "exit",
            "name": "Emergency Exit",
            "x": 520,
            "y": 50
          },
          {
            "id": "kitchen-1",
            "type": "kitchen",
            "name": "Kitchen",
            "x": 520,
            "y": 120
          }
        ],
        "seats": [
          {
            "id": "seat-1",
            "x": 110,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-2",
            "employee": null
          },
          {
            "id": "seat-2",
            "x": 190,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-3",
            "employee": null
          },
          {
            "id": "seat-3",
            "x": 270,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-4",
            "employee": null
          },
          {
            "id": "seat-4",
            "x": 350,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-5",
            "employee": null
          },
          {
            "id": "seat-5",
            "x": 430,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-6",
            "employee": null
          },
          {
            "id": "seat-6",
            "x": 110,
            "y": 300,
            "rotation": 0,
            "furnitureId": "desk-7",
            "employee": null
          },
          {
            "id": "seat-7",
            "x": 190,
            "y": 300,
            "rotation": 0,
            "furnitureId": "desk-8",
            "employee": null
          },
          {
            "id": "seat-8",
            "x": 270,
            "y": 300,
            "rotation": 0,
            "furnitureId": "desk-9",
            "employee": null
          },
          {
            "id": "seat-9",
            "x": 350,
            "y": 300,
            "rotation": 0,
            "furnitureId": "desk-10",
            "employee": null
          },
          {
            "id": "seat-10",
            "x": 430,
            "y": 300,
            "rotation": 0,
            "furnitureId": "desk-11",
            "employee": null
          },
          {
            "id": "seat-11",
            "x": 110,
            "y": 380,
            "rotation": 0,
            "furnitureId": "desk-12",
            "employee": null
          },
          {
            "id": "seat-12",
            "x": 190,
            "y": 380,
            "rotation": 0,
            "furnitureId": "desk-13",
            "employee": null
          },
          {
            "id": "seat-13",
            "x": 270,
            "y": 380,
            "rotation": 0,
            "furnitureId": "desk-14",
            "employee": null
          },
          {
            "id": "seat-14",
            "x": 350,
            "y": 380,
            "rotation": 0,
            "furnitureId": "desk-15",
            "employee": null
          },
          {
            "id": "seat-15",
            "x": 430,
            "y": 380,
            "rotation": 0,
            "furnitureId": "desk-16",
            "employee": null
          },
          {
            "id": "seat-16",
            "x": 110,
            "y": 460,
            "rotation": 0,
            "furnitureId": "desk-17",
            "employee": null
          },
          {
            "id": "seat-17",
            "x": 190,
            "y": 460,
            "rotation": 0,
            "furnitureId": "desk-18",
            "employee": null
          }
        ]
      }
    ]
  },
  "auburn": {
    "id": "auburn",
    "name": "Auburn Office",
    "address": "64 South Street, Auburn, NY 13021",
    "image": "/AuburnOffice.jpg",
    "phone": "315-253-7301",
    "hours": "Mon-Fri: 8:00 AM - 5:30 PM",
    "wifi": "Auburn-Office-Net",
    "amenitiesList": [
      {
        "name": "Printers (3)"
      },
      {
        "name": "Restrooms"
      },
      {
        "name": "Emergency Exits"
      },
      {
        "name": "Kitchen Areas (2)"
      },
      {
        "name": "Conference Rooms (6)"
      },
      {
        "name": "Wi-Fi"
      }
    ],
    "quickLinks": [
      {
        "name": "IT Support",
        "url": "#"
      },
      {
        "name": "Book Room",
        "url": "#"
      },
      {
        "name": "Report Issue",
        "url": "#"
      }
    ],
    "floors": [
      {
        "id": "first-floor",
        "name": "First Floor",
        "rooms": [
          {
            "id": "open-area-1",
            "name": "Open Area",
            "x": 19.25,
            "y": 261,
            "width": 86.25,
            "height": 119.25,
            "type": "office"
          }
        ],
        "furniture": [],
        "amenities": [
          {
            "id": "printer-f1",
            "type": "printer",
            "name": "HP OfficeJet Pro 9015e",
            "ipAddress": "192.168.4.101",
            "queueName": "AUBURN-F1-PRINT-01",
            "status": "Online",
            "x": 957,
            "y": 25
          }
        ],
        "seats": [
          {
            "id": "auburn-f1-seat-1",
            "x": 75.83200073242188,
            "y": 576.0079956054688,
            "rotation": 0,
            "furnitureId": "desk-f1-1",
            "employee": null
          },
          {
            "id": "auburn-f1-seat-2",
            "x": 181,
            "y": 578.1999969482422,
            "rotation": 0,
            "furnitureId": "desk-f1-2",
            "employee": null
          },
          {
            "id": "auburn-f1-seat-3",
            "x": 339.20001220703125,
            "y": 593.1999969482422,
            "rotation": 0,
            "furnitureId": "desk-f1-3",
            "employee": null
          },
          {
            "id": "auburn-f1-seat-4",
            "x": 436.4000244140625,
            "y": 587.1999969482422,
            "rotation": 0,
            "furnitureId": "desk-f1-4",
            "employee": null
          },
          {
            "id": "auburn-f1-seat-5",
            "x": 109.79998779296875,
            "y": 579.3999938964844,
            "rotation": 0,
            "furnitureId": "desk-f1-5",
            "employee": null
          },
          {
            "id": "seat-1749496564425",
            "x": 144.41058349609375,
            "y": 582.9412231445312,
            "rotation": 0,
            "employee": null
          },
          {
            "id": "seat-1749497309584",
            "x": 673.5943908691406,
            "y": 381.118408203125,
            "rotation": 0,
            "employee": null
          },
          {
            "id": "seat-1749501622988",
            "x": 333.30645751953125,
            "y": 530.7478637695312,
            "rotation": 0,
            "employee": null
          },
          {
            "id": "seat-1749755505030",
            "x": 539.4743041992188,
            "y": 294.5041198730469,
            "rotation": 0,
            "employee": null
          }
        ]
      },
      {
        "id": "second-floor",
        "name": "Second Floor",
        "rooms": [
          {
            "id": "room-1749754851696",
            "name": "Office",
            "type": "office",
            "x": 533.125,
            "y": 23.75,
            "width": 150,
            "height": 175
          },
          {
            "id": "room-1749754921304",
            "name": "Kitchen",
            "type": "conference",
            "x": 453.125,
            "y": 26.25,
            "width": 79.375,
            "height": 171.25
          },
          {
            "id": "room-1749754950464",
            "name": "Office",
            "type": "office",
            "x": 303.125,
            "y": 25,
            "width": 148.75,
            "height": 173.75
          },
          {
            "id": "room-1749754979960",
            "name": "  ",
            "type": "office",
            "x": 451.875,
            "y": 146.25,
            "width": 50,
            "height": 50
          },
          {
            "id": "room-1749755007696",
            "name": "Office",
            "type": "office",
            "x": 226.25,
            "y": 195,
            "width": 229.375,
            "height": 123.75
          },
          {
            "id": "room-1749755070551",
            "name": "Office",
            "type": "office",
            "x": 293.125,
            "y": 317.5,
            "width": 180,
            "height": 172.5
          },
          {
            "id": "room-1749755096143",
            "name": "Office",
            "type": "office",
            "x": 536.25,
            "y": 320,
            "width": 145.625,
            "height": 176.25
          },
          {
            "id": "room-1749755130375",
            "name": "Closet",
            "type": "kitchen",
            "x": 475,
            "y": 318.75,
            "width": 60.625,
            "height": 172.5
          },
          {
            "id": "room-1749755217519",
            "name": "Bathroom",
            "type": "storage",
            "x": 685,
            "y": 25,
            "width": 79.375,
            "height": 97.5
          },
          {
            "id": "room-1749755255255",
            "name": "HELM",
            "type": "print",
            "x": 682.5,
            "y": 251.25,
            "width": 233.125,
            "height": 140
          },
          {
            "id": "room-1749755296319",
            "name": "HELM",
            "type": "print",
            "x": 683.75,
            "y": 125,
            "width": 81.875,
            "height": 123.75
          }
        ],
        "furniture": [
          {
            "id": "desk-dgm",
            "type": "desk",
            "x": 385,
            "y": 105,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "furniture-1749755475310",
            "type": "desk",
            "x": 278.75,
            "y": 226.25,
            "width": 40,
            "height": 60,
            "rotation": 0
          }
        ],
        "amenities": [
          {
            "id": "printer-main",
            "type": "printer",
            "name": "HP OfficeJet Pro 9015e",
            "ipAddress": "192.168.4.101",
            "queueName": "AUBURN-PRINT-01",
            "status": "Online",
            "x": 468.75,
            "y": 128.75
          },
          {
            "id": "restroom-1",
            "type": "restroom",
            "name": "Restroom",
            "x": 728.75,
            "y": 52.5
          }
        ],
        "seats": [
          {
            "id": "auburn-seat-16",
            "x": 420.41717529296875,
            "y": 88.37527465820312,
            "rotation": 0,
            "furnitureId": "desk-kjq",
            "employee": null
          },
          {
            "id": "seat-1749755502086",
            "x": 272.2663573156726,
            "y": 244.962356170413,
            "rotation": 0,
            "employee": null
          },
          {
            "id": "seat-1749755522174",
            "x": 436.5950012207031,
            "y": 433.27001953125,
            "rotation": 0,
            "employee": null
          },
          {
            "id": "seat-1749755557086",
            "x": 598.3450012207031,
            "y": 429.77001953125,
            "rotation": 0,
            "employee": null
          }
        ]
      }
    ]
  },
  "albany": {
    "id": "albany",
    "name": "Albany Office",
    "address": "69 State Street, Suite 1100D Albany, NY 12207",
    "image": "/AlbanyOffice.jpg",
    "phone": "518-555-0100",
    "hours": "Mon-Fri: 8:30 AM - 5:30 PM",
    "wifi": "Albany-Office-Net",
    "amenitiesList": [
      {
        "name": "Printers (2)"
      },
      {
        "name": "Restrooms"
      },
      {
        "name": "Emergency Exits"
      },
      {
        "name": "Kitchen"
      },
      {
        "name": "Conference Rooms (3)"
      },
      {
        "name": "Wi-Fi"
      }
    ],
    "quickLinks": [
      {
        "name": "IT Support",
        "url": "#"
      },
      {
        "name": "Book Room",
        "url": "#"
      },
      {
        "name": "Report Issue",
        "url": "#"
      }
    ],
    "floors": [
      {
        "id": "floor-1",
        "name": "Floor 1",
        "rooms": [
          {
            "id": "room-1",
            "name": "Lobby",
            "x": 50,
            "y": 50,
            "width": 200,
            "height": 100,
            "type": "reception"
          },
          {
            "id": "room-2",
            "name": "Open Space",
            "x": 50,
            "y": 170,
            "width": 400,
            "height": 250,
            "type": "office"
          }
        ],
        "furniture": [
          {
            "id": "desk-alb-1",
            "type": "desk",
            "x": 100,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-alb-2",
            "type": "desk",
            "x": 200,
            "y": 200,
            "width": 60,
            "height": 40,
            "rotation": 0
          }
        ],
        "amenities": [
          {
            "id": "printer-1",
            "type": "printer",
            "name": "Brother MFC-L8900CDW",
            "ipAddress": "192.168.2.101",
            "queueName": "ALB-PRINT-01",
            "status": "Online",
            "x": 350,
            "y": 120
          },
          {
            "id": "restroom-1",
            "type": "restroom",
            "name": "Restroom",
            "x": 350,
            "y": 50
          },
          {
            "id": "exit-1",
            "type": "exit",
            "name": "Emergency Exit",
            "x": 420,
            "y": 50
          },
          {
            "id": "kitchen-1",
            "type": "kitchen",
            "name": "Kitchen",
            "x": 420,
            "y": 120
          }
        ],
        "seats": [
          {
            "id": "albany-seat-1",
            "x": 130,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-alb-1",
            "employee": null
          },
          {
            "id": "albany-seat-2",
            "x": 230,
            "y": 220,
            "rotation": 0,
            "furnitureId": "desk-alb-2",
            "employee": null
          }
        ]
      }
    ]
  },
  "malone": {
    "id": "malone",
    "name": "Malone Office",
    "address": "320 West Main St. Ste 2 Malone, NY 12953",
    "image": "/MaloneOffice.jpg",
    "phone": "518-555-0200",
    "hours": "Mon-Fri: 8:00 AM - 5:00 PM",
    "wifi": "Malone-Office-Net",
    "amenitiesList": [
      {
        "name": "Printers (1)"
      },
      {
        "name": "Restrooms"
      },
      {
        "name": "Emergency Exits"
      },
      {
        "name": "Kitchen"
      },
      {
        "name": "Conference Rooms (2)"
      },
      {
        "name": "Wi-Fi"
      }
    ],
    "quickLinks": [
      {
        "name": "IT Support",
        "url": "#"
      },
      {
        "name": "Book Room",
        "url": "#"
      },
      {
        "name": "Report Issue",
        "url": "#"
      }
    ],
    "floors": [
      {
        "id": "floor-1",
        "name": "Floor 1",
        "rooms": [
          {
            "id": "room-1",
            "name": "Reception",
            "x": 50,
            "y": 50,
            "width": 150,
            "height": 100,
            "type": "reception"
          },
          {
            "id": "room-2",
            "name": "Open Space",
            "x": 220,
            "y": 50,
            "width": 300,
            "height": 200,
            "type": "office"
          },
          {
            "id": "room-3",
            "name": "Conference Room",
            "x": 50,
            "y": 170,
            "width": 150,
            "height": 100,
            "type": "conference"
          }
        ],
        "furniture": [
          {
            "id": "desk-mal-1",
            "type": "desk",
            "x": 250,
            "y": 100,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "desk-mal-2",
            "type": "desk",
            "x": 350,
            "y": 100,
            "width": 60,
            "height": 40,
            "rotation": 0
          },
          {
            "id": "table-mal-1",
            "type": "table",
            "x": 75,
            "y": 195,
            "width": 100,
            "height": 50,
            "rotation": 0
          }
        ],
        "amenities": [
          {
            "id": "printer-1",
            "type": "printer",
            "name": "Canon PIXMA TR8620",
            "ipAddress": "192.168.3.101",
            "queueName": "MAL-PRINT-01",
            "status": "Online",
            "x": 450,
            "y": 120
          },
          {
            "id": "restroom-1",
            "type": "restroom",
            "name": "Restroom",
            "x": 450,
            "y": 50
          },
          {
            "id": "exit-1",
            "type": "exit",
            "name": "Emergency Exit",
            "x": 520,
            "y": 50
          },
          {
            "id": "kitchen-1",
            "type": "kitchen",
            "name": "Kitchen",
            "x": 520,
            "y": 120
          }
        ],
        "seats": [
          {
            "id": "malone-seat-1",
            "x": 280,
            "y": 120,
            "rotation": 0,
            "furnitureId": "desk-mal-1",
            "employee": null
          },
          {
            "id": "malone-seat-2",
            "x": 380,
            "y": 120,
            "rotation": 0,
            "furnitureId": "desk-mal-2",
            "employee": null
          }
        ]
      }
    ]
  }
}

// Initialize storage with current data
let currentData = loadFromStorage()

// Load data from localStorage or return default
function loadFromStorage(): any {
  if (typeof window === "undefined") return defaultLocations

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      // Merge with defaults to ensure all locations exist
      return { ...defaultLocations, ...parsed }
    }
  } catch (error) {
    console.error("Error loading from localStorage:", error)
  }

  return defaultLocations
}

// Save data to localStorage
function saveToStorage(data: any): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    console.log("✅ Data saved to localStorage successfully")
  } catch (error) {
    console.error("❌ Error saving to localStorage:", error)
  }
}

// Export functions to match the expected API
export function addNewLocation(locationData: any): boolean {
  return addLocation(locationData)
}

export function getLocationData(locationId: string) {
  return getLocationById(locationId)
}

export function updateLocationData(locationId: string, updatedData: any) {
  return updateLocation(locationId, updatedData)
}

export function saveLocationData(locationId: string, updatedData: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const result = updateLocation(locationId, updatedData)
      if (result) {
        resolve()
      } else {
        reject(new Error(`Failed to save location data for ${locationId}`))
      }
    } catch (error) {
      reject(error)
    }
  })
}

export function addNewFloor(locationId: string, floorData: any): boolean {
  return addFloor(locationId, floorData)
}

export function deleteFloor(locationId: string, floorId: string): boolean {
  const location = getLocationById(locationId)
  if (!location) return false

  location.floors = location.floors.filter((f: any) => f.id !== floorId)
  saveToStorage(currentData)
  return true
}

export function resetToDefaults(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY)
    currentData = defaultLocations
    console.log("🔄 Data reset to defaults")
  }
}

export function clearAllEmployees(): boolean {
  currentData = loadFromStorage()
  
  try {
    // Iterate through all locations and floors to clear employees
    for (const locationId in currentData) {
      const location = currentData[locationId]
      if (location.floors) {
        location.floors.forEach((floor: any) => {
          if (floor.seats) {
            floor.seats.forEach((seat: any) => {
              seat.employee = null
            })
          }
        })
      }
    }
    
    saveToStorage(currentData)
    console.log("✅ All employees cleared from all locations")
    return true
  } catch (error) {
    console.error("❌ Error clearing employees:", error)
    return false
  }
}

// Helper functions
export function getAllLocations() {
  currentData = loadFromStorage()
  return Object.values(currentData)
}

export function getLocationById(id: string) {
  currentData = loadFromStorage()
  return currentData[id as keyof typeof currentData] || null
}

export function updateLocation(id: string, updates: any) {
  currentData = loadFromStorage()

  if (currentData[id as keyof typeof currentData]) {
    currentData[id as keyof typeof currentData] = { ...currentData[id as keyof typeof currentData], ...updates }
    saveToStorage(currentData)
    return currentData[id as keyof typeof currentData]
  }
  return null
}

export function addLocation(location: any) {
  currentData = loadFromStorage()

  // Generate a unique ID if not provided
  if (!location.id) {
    location.id = location.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  currentData[location.id] = location
  saveToStorage(currentData)
  return location
}

export function deleteLocation(id: string) {
  currentData = loadFromStorage()
  delete currentData[id as keyof typeof currentData]
  saveToStorage(currentData)
}

export function updateEmployee(locationId: string, floorId: string, employee: any) {
  const location = getLocationById(locationId)
  if (!location) return null

  const floor = location.floors.find((f: any) => f.id === floorId)
  if (!floor) return null

  // Find the seat with this employee and update it
  const seat = floor.seats.find((s: any) => s.employee?.id === employee.id)
  if (seat) {
    seat.employee = employee
    updateLocation(locationId, location)
    return employee
  }
  return null
}

export function moveEmployee(employeeId: string, fromLocationId: string, toLocationId: string, toFloorId?: string) {
  // Find and remove employee from current location
  let employee = null
  const fromLocation = getLocationById(fromLocationId)
  if (fromLocation) {
    for (const floor of fromLocation.floors) {
      const seatIndex = floor.seats.findIndex((s: any) => s.employee?.id === employeeId)
      if (seatIndex !== -1) {
        employee = floor.seats[seatIndex].employee
        floor.seats[seatIndex].employee = null
        break
      }
    }
  }

  if (!employee) return false

  // Add employee to target location
  const toLocation = getLocationById(toLocationId)
  if (toLocation) {
    const targetFloor = toFloorId ? toLocation.floors.find((f: any) => f.id === toFloorId) : toLocation.floors[0]

    if (targetFloor) {
      // Find an empty seat
      const emptySeat = targetFloor.seats.find((s: any) => !s.employee)
      if (emptySeat) {
        emptySeat.employee = employee
        updateLocation(fromLocationId, fromLocation)
        updateLocation(toLocationId, toLocation)
        return true
      }
    }
  }

  return false
}

export function deleteEmployee(locationId: string, employeeId: string) {
  const location = getLocationById(locationId)
  if (!location) return false

  for (const floor of location.floors) {
    const seat = floor.seats.find((s: any) => s.employee?.id === employeeId)
    if (seat) {
      seat.employee = null
      updateLocation(locationId, location)
      return true
    }
  }
  return false
}

export function addEmployee(locationId: string, floorId: string, employee: any) {
  const location = getLocationById(locationId)
  if (!location) return false

  const floor = location.floors.find((f: any) => f.id === floorId)
  if (!floor) return false

  // Find an empty seat
  const emptySeat = floor.seats.find((s: any) => !s.employee)
  if (emptySeat) {
    emptySeat.employee = employee
    updateLocation(locationId, location)
    return true
  }
  return false
}

export function addSeat(locationId: string, floorId: string, seat: any) {
  const location = getLocationById(locationId)
  if (!location) return false

  const floor = location.floors.find((f: any) => f.id === floorId)
  if (!floor) return false

  floor.seats.push(seat)
  updateLocation(locationId, location)
  return true
}

export function addFurniture(locationId: string, floorId: string, furniture: any) {
  const location = getLocationById(locationId)
  if (!location) return false

  const floor = location.floors.find((f: any) => f.id === floorId)
  if (!floor) return false

  if (!floor.furniture) {
    floor.furniture = []
  }
  floor.furniture.push(furniture)
  updateLocation(locationId, location)
  return true
}

export function deleteFurniture(locationId: string, floorId: string, furnitureId: string) {
  const location = getLocationById(locationId)
  if (!location) return false

  const floor = location.floors.find((f: any) => f.id === floorId)
  if (!floor || !floor.furniture) return false

  floor.furniture = floor.furniture.filter((f: any) => f.id !== furnitureId)
  updateLocation(locationId, location)
  return true
}

export function addFloor(locationId: string, floor: any) {
  const location = getLocationById(locationId)
  if (!location) return false

  location.floors.push(floor)
  updateLocation(locationId, location)
  return true
}

export function exportData() {
  currentData = loadFromStorage()
  return JSON.stringify(currentData, null, 2)
}

export function importData(jsonData: string) {
  try {
    const newData = JSON.parse(jsonData)
    currentData = newData
    saveToStorage(currentData)
    return true
  } catch (error) {
    console.error("Error importing data:", error)
    return false
  }
}

// Initialize data from localStorage on module load
if (typeof window !== "undefined") {
  currentData = loadFromStorage()
}
