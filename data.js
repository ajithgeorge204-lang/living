var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-03",
      "name": "living 03",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.422213479999332,
          "pitch": 0.36432892312339504,
          "rotation": 5.497787143782138,
          "target": "2-living-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7868817230667311,
          "pitch": 0.25574625684022045,
          "rotation": 0,
          "target": "0-living-03"
        },
        {
          "yaw": -1.5830808789447914,
          "pitch": 0.30862470781846163,
          "rotation": 0,
          "target": "2-living-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-02",
      "name": "living 02",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13546634825358872,
          "pitch": 0.270919878189245,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "living.360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
