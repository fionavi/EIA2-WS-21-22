var APP_DATA = {
  "scenes": [
    {
      "id": "0-biberbau-rotes-haus",
      "name": "Biberbau rotes Haus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1504,
      "initialViewParameters": {
        "yaw": -0.07125633060547543,
        "pitch": -0.11006022328999165,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.918652800706038,
          "pitch": -0.020621975899391742,
          "rotation": 0,
          "target": "1-biberbau-weg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0619888066024092,
          "pitch": -0.15398452309588073,
          "title": "blauer Biberbau",
          "text": "Bahnhofstraße 7/1"
        },
        {
          "yaw": -1.3945413331907908,
          "pitch": -0.2037888349954038,
          "title": "grüner Biberbau",
          "text": "Bahnhofstraße 7/2"
        },
        {
          "yaw": 1.5552735800361361,
          "pitch": -0.3066656019717513,
          "title": "&nbsp;roter Biberbau",
          "text": "Bahnhofstraße 7/3"
        }
      ]
    },
    {
      "id": "1-biberbau-weg",
      "name": "Biberbau Weg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1504,
      "initialViewParameters": {
        "yaw": -1.205179635239979,
        "pitch": -0.10878181567332135,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.8724059448221197,
          "pitch": 0.006688242403555478,
          "rotation": 0,
          "target": "0-biberbau-rotes-haus"
        },
        {
          "yaw": -1.2908555991373127,
          "pitch": -0.06177595949545989,
          "rotation": 0.7853981633974483,
          "target": "2-bahnhofstrae"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5844437804037916,
          "pitch": -0.13787237459421142,
          "title": "blauer Biberbau",
          "text": "Erdgeschoss"
        },
        {
          "yaw": -1.4727466139933405,
          "pitch": -0.06835732814529116,
          "title": "Waschhaus",
          "text": "Waschmaschinen und Trockner"
        },
        {
          "yaw": 3.114965470365437,
          "pitch": -0.5908562232435184,
          "title": "roter Biberbau",
          "text": "1. Stock"
        },
        {
          "yaw": 1.096445000283257,
          "pitch": -0.5994163953822618,
          "title": "grüner Biberbau",
          "text": "2. Stock"
        }
      ]
    },
    {
      "id": "2-bahnhofstrae",
      "name": "Bahnhofstraße",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1504,
      "initialViewParameters": {
        "yaw": 0.1567234430362241,
        "pitch": 0.07664778939465933,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.2547358068198156,
          "pitch": 0.16067662633344781,
          "rotation": 5.497787143782138,
          "target": "1-biberbau-weg"
        },
        {
          "yaw": 0.14570189491722374,
          "pitch": 0.162053918251992,
          "rotation": 11.780972450961727,
          "target": "3-l-bau"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.49655231467706784,
          "pitch": -0.0878890924537643,
          "title": "Zahner",
          "text": "Einzelhandel"
        }
      ]
    },
    {
      "id": "3-l-bau",
      "name": "L-Bau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1504,
      "initialViewParameters": {
        "yaw": 2.969182288305939,
        "pitch": 0.36558976992686176,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.909739578155751,
          "pitch": -0.004787186566780122,
          "rotation": 2.356194490192345,
          "target": "2-bahnhofstrae"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0965927146334815,
          "pitch": 0.25121084516412395,
          "title": "Treppenhaus",
          "text": "1. Stock im L Bau"
        },
        {
          "yaw": 0.5994757818532719,
          "pitch": -0.3576117077887755,
          "title": "Aufzug",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
