TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_t.jpg",
  "label": "Front unit 1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27,
   "pitch": -81.54
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 27.32,
     "path": "shortest",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "easing": "cubic_in_out",
     "targetPitch": 30.16
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D_t.jpg",
  "label": "Zoom Out Video",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_t.jpg",
  "label": "Entry1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.42,
   "pitch": -1.01
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 96.02,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.16
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_t.jpg",
  "label": "Livingroom1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 52.55,
   "pitch": 0.81
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -75.76,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.22
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_t.jpg",
  "label": "Kitchen1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.72,
   "pitch": 1.64
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 131.54,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.55
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_t.jpg",
  "label": "Back Porch1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.2,
   "pitch": 1.18
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 169.07,
     "path": "shortest",
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "easing": "cubic_in_out",
     "targetPitch": 11.76
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_t.jpg",
  "label": "Guest Bath1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.49,
   "pitch": -2.17
  },
  "automaticRotationSpeed": 52,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.32,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 14.32,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 14.32,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_t.jpg",
  "label": "Hallway1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.62,
   "pitch": 5.37
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -165.86,
     "path": "shortest",
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "easing": "cubic_in_out",
     "targetPitch": 0.14
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_t.jpg",
  "label": "Second Bedroom1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.77,
   "pitch": -1.14
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.37,
     "path": "shortest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "easing": "cubic_in_out",
     "targetPitch": 1.55
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_t.jpg",
  "label": "Masterbedroom 1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.02,
   "pitch": 5.24
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 103.76,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.63
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_t.jpg",
  "label": "MasterBath 1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 35000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 13.79,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 13.79,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 13.79,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_t.jpg",
  "label": "Master1",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.76,
   "pitch": 6.05
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -81.37,
     "path": "shortest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "easing": "cubic_in_out",
     "targetPitch": -0.43
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0_t.jpg",
  "label": "Drone Video",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_t.jpg",
  "label": "Front Unit 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -180,
   "pitch": 90
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 10.45,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -89.91
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -3,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 35.18
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_t.jpg",
  "label": "Entry 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.68,
   "pitch": 9.27
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -103.95,
     "path": "longest",
     "pitchSpeed": 29.89,
     "yawSpeed": 59.05,
     "easing": "cubic_in_out",
     "targetPitch": 1.78
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_t.jpg",
  "label": "Livingroom2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.67,
   "pitch": -4.39
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -71.38,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 1.61
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_t.jpg",
  "label": "Kitchen 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.63,
   "pitch": 3.61
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -164.76,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 5.17
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_t.jpg",
  "label": "Back Porch 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.9,
   "pitch": 34.41
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -47.44,
     "path": "longest",
     "pitchSpeed": 32.03,
     "yawSpeed": 63.35,
     "easing": "cubic_in_out",
     "targetPitch": 8.48
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_t.jpg",
  "label": "Guest Bath 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -53.13,
   "pitch": 2.55
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -131.04,
     "path": "shortest",
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "easing": "cubic_in_out",
     "targetPitch": 9.98
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 36.84,
     "path": "shortest",
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "easing": "cubic_in_out",
     "targetPitch": 10.72
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_t.jpg",
  "label": "Utility2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.31,
   "pitch": 5.81
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -171.79,
     "path": "shortest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "easing": "cubic_in_out",
     "targetPitch": 3.22
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811_t.jpg",
  "label": "Hallway2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.66,
   "pitch": -1.42
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -94.67,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 2.6
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_t.jpg",
  "label": "Second Bedroom 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.58,
   "pitch": 1.62
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -118.39,
     "path": "shortest",
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "easing": "cubic_in_out",
     "targetPitch": 0.97
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_t.jpg",
  "label": "Bedroom closet 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 46.46,
   "pitch": 9.28
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -54.39,
     "path": "shortest",
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "easing": "linear",
     "targetPitch": 12.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_t.jpg",
  "label": "Master Bedroom 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.92,
   "pitch": 7.02
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.59,
     "path": "shortest",
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "easing": "linear",
     "targetPitch": 9.31
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 174.39,
     "path": "shortest",
     "pitchSpeed": 29.89,
     "yawSpeed": 59.05,
     "easing": "linear",
     "targetPitch": 1.83
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_t.jpg",
  "label": "Master 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 112.66,
   "pitch": 1.43
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -67.68,
     "path": "shortest",
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "easing": "cubic_in_out",
     "targetPitch": 8.69
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_t.jpg",
  "label": "Masterbath 2",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.47,
   "pitch": 3.38
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 15.91,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 15.91,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 15.91,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_t.jpg",
  "label": "Driveway",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -118.36,
   "pitch": 25.36
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -177.8,
     "path": "shortest",
     "pitchSpeed": 38.45,
     "yawSpeed": 76.25,
     "easing": "cubic_in_out",
     "targetPitch": 3.98
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 136.65,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.76
    },
    {
     "targetHfov": 100,
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 120.43,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.81,
     "hfovSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
    "camera": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
    "camera": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
    "camera": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
    "camera": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
    "camera": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
    "camera": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
    "camera": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
    "camera": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
    "camera": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
    "camera": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
    "camera": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12, this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
    "camera": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
    "camera": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
    "camera": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
    "camera": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
    "camera": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
    "camera": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
    "camera": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
    "camera": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
    "camera": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
    "camera": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
    "camera": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
    "camera": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
    "camera": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
    "camera": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
    "camera": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
    "camera": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
    "camera": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
    "camera": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
    "camera": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
    "camera": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
    "camera": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
    "camera": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
    "camera": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
    "camera": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
    "camera": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
    "camera": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
    "camera": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
    "camera": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
    "camera": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
    "camera": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
    "camera": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
    "camera": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
    "camera": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
    "camera": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
    "camera": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
    "camera": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 23, 24)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
    "camera": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 24, 25)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
    "camera": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 25, 26)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
    "camera": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 26, 0)"
   }
  ]
 },
 {
  "class": "Map",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "id": "map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B",
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "initialZoomFactor": 1,
  "height": 2971,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "minimumZoomFactor": 0.5,
  "width": 6739,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 705,
     "class": "ImageResourceLevel",
     "width": 1600,
     "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B.png"
    },
    {
     "height": 352,
     "class": "ImageResourceLevel",
     "width": 800,
     "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_lq.png",
     "grayscale": true
    }
   ]
  },
  "thumbnailUrl": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_t.png",
  "label": "Floorplan Rendering",
  "maximumZoomFactor": 1.2,
  "overlays": [
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D6328445_C3E6_3DFD_41BB_DA25DDD05A03",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 2751.47,
     "height": 156.04,
     "x": 2135.93,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_1_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 0)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 2751.47,
     "x": 2135.93,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_1.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D7D9790F_C3E6_378D_41C5_8263D6013190",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 2161.61,
     "height": 156.04,
     "x": 1991.5,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_2_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 2)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 2161.61,
     "x": 1991.5,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_2.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D765365B_C3E6_7D95_41CB_56017CBCF570",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1868.24,
     "height": 156.04,
     "x": 1170.87,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_3_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 3)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1868.24,
     "x": 1170.87,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_3.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D0201407_C3E6_1D7D_4190_3E5D702CB33D",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 977.3,
     "height": 156.04,
     "x": 1044.99,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_4_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 4)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 977.3,
     "x": 1044.99,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_4.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D68B6DB2_C3EA_0E94_41D8_24736959EBA6",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 106.22,
     "height": 156.04,
     "x": 1391.79,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_5_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 5)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 106.22,
     "x": 1391.79,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_5.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D616678B_C32A_1B75_41D1_430494C91C4B",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 875.51,
     "height": 156.04,
     "x": 1728.9,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_6_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 6)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 875.51,
     "x": 1728.9,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_6.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D52BEF2C_C32A_0BB3_41DB_29F1B6BE5924",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1461.1,
     "height": 156.04,
     "x": 2067.98,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_7_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 7)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1461.1,
     "x": 2067.98,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_7.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D5339D87_C32E_0F7D_41C4_9A978AE66181",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 615.96,
     "height": 156.04,
     "x": 2518.84,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_8_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 8)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 615.96,
     "x": 2518.84,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_8.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D51EFD36_C32E_0F9C_419F_56E29F9F5E00",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1947.04,
     "height": 156.04,
     "x": 2944.41,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_9_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 9)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1947.04,
     "x": 2944.41,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_9.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D4F981ED_C32A_768D_41E5_67EB742F9485",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 376.44,
     "height": 156.04,
     "x": 3088.85,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_10_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 10)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 376.44,
     "x": 3088.85,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_10.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D4997408_C32A_7D73_41E4_E8B7BCB2520A",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1009.14,
     "height": 156.04,
     "x": 3044.04,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_11_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 11)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1009.14,
     "x": 3044.04,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_11.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D517541C_C32A_1D93_41C7_83A90E4FBBE3",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 2703.37,
     "height": 156.04,
     "x": 4568.27,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_12_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 13)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 2703.37,
     "x": 4568.27,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_12.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D4C4775A_C32A_1B97_41CF_C81BFC022CD5",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 2116.63,
     "height": 156.04,
     "x": 4709.42,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_13_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 14)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 2116.63,
     "x": 4709.42,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_13.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D476234A_C32A_1BF7_41B9_0B71C1BFBFFF",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1874.81,
     "height": 156.04,
     "x": 5508.06,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_14_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 15)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1874.81,
     "x": 5508.06,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_14.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D4ED5F53_C32A_0B95_41D3_9F13E20070E5",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 879.94,
     "height": 156.04,
     "x": 5610.96,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_15_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 16)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 879.94,
     "x": 5610.96,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_15.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_DB2AD0BB_C326_1694_41D6_663ED5EEB34E",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 65.67,
     "height": 156.04,
     "x": 5292.56,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_16_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 17)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 65.67,
     "x": 5292.56,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_16.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_DADF6A97_C326_0A9D_41E8_3FA3782F67C9",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 863.53,
     "height": 156.04,
     "x": 4954.46,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_17_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 18)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 863.53,
     "x": 4954.46,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_17.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D9AB2817_C326_159D_41DD_FE294C73C787",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1430.4,
     "height": 156.04,
     "x": 4660.18,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_18_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 19)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1430.4,
     "x": 4660.18,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_18.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_DA21EB0D_C326_0B8D_41D8_7C8C19DF5370",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1436.97,
     "height": 156.04,
     "x": 4335.22,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_19_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 20)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1436.97,
     "x": 4335.22,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_19.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D995583B_C35A_1595_41E6_4E0938B6EFA8",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 617.27,
     "height": 156.04,
     "x": 4214.75,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_20_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 21)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 617.27,
     "x": 4214.75,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_20.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D8F9A2EF_C35A_3A8C_41D5_55E37C23E81B",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 357.89,
     "height": 156.04,
     "x": 4748.81,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_21_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 22)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 357.89,
     "x": 4748.81,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_21.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D9052B64_C35A_0BBC_41D8_EFB92346C4C3",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 1889.09,
     "height": 156.04,
     "x": 3749.78,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_22_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 23)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 1889.09,
     "x": 3749.78,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_22.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_D80B0B00_C35A_0B73_41C1_87EC03835A78",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 977.3,
     "height": 156.04,
     "x": 3632.76,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_23_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 24)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 977.3,
     "x": 3632.76,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_23.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_DFEA8E1D_C35A_0D8C_41E2_FC4C186CBA8B",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 361.17,
     "height": 156.04,
     "x": 3604.2,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_24_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 25)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 361.17,
     "x": 3604.2,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_24.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   },
   {
    "class": "AreaHotspotMapOverlay",
    "id": "overlay_DF85424C_C35E_15F3_41E7_132021101909",
    "map": {
     "offsetY": 0,
     "class": "HotspotMapOverlayMap",
     "width": 156,
     "y": 428.97,
     "height": 156.04,
     "x": 6658.09,
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 18,
        "class": "ImageResourceLevel",
        "width": 18,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_25_map.gif"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 26)"
     }
    ],
    "image": {
     "class": "HotspotMapOverlayImage",
     "y": 428.97,
     "x": 6658.09,
     "width": 156,
     "height": 156.04,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 37,
        "url": "media/map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B_HS_25.png"
       }
      ]
     }
    },
    "rollOverDisplay": false,
    "useHandCursor": true
   }
  ],
  "scaleMode": "fit_inside",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "fieldOfViewOverlayRadiusScale": 0.3
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "paddingLeft": 0,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingLeft": 6,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipPaddingTop": 4,
   "playbackBarRight": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipTextShadowOpacity": 0,
   "progressBarOpacity": 1,
   "toolTipTextShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarOpacity": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBackgroundOpacity": 1,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeight": 10,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderColor": "#000000",
   "paddingBottom": 0,
   "minHeight": 1,
   "shadow": false,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "progressOpacity": 1,
   "toolTipFontSize": 12,
   "progressRight": 0,
   "paddingTop": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBorderColor": "#000000",
   "playbackBarBottom": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBackgroundOpacity": 1,
   "playbackBarBorderSize": 0,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowColor": "#000000",
   "progressLeft": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "height": "90.003%",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarLeft": 0,
   "playbackBarProgressOpacity": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadHeight": 15,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "progressBorderRadius": 0,
   "progressBarBorderColor": "#000000",
   "width": "93.76%",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "minWidth": 1,
   "progressHeight": 10,
   "playbackBarBorderRadius": 0,
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingBottom": 4,
   "progressBottom": 2,
   "bottom": "5%",
   "id": "MapViewer",
   "transitionMode": "blending",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderRadius": 0,
   "toolTipBorderRadius": 3,
   "progressBarBorderRadius": 0,
   "toolTipFontWeight": "normal",
   "toolTipFontStyle": "normal",
   "playbackBarProgressBorderSize": 0,
   "left": "3.06%",
   "progressBorderSize": 0,
   "progressBarBorderSize": 0,
   "transitionDuration": 500,
   "paddingRight": 0,
   "toolTipBorderSize": 1
  }
 },
 {
  "class": "PlayList",
  "id": "playList_DF0D399F_C35E_368D_41AF_DB4367225689",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_DF0D199F_C35E_368D_41E5_C24F4F08911C",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_D0E6709B_C3DA_3695_41E4_9C2EECDB365B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "paddingBottom": 0,
  "minHeight": 50,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "progressOpacity": 1,
  "toolTipFontSize": 12,
  "progressRight": 0,
  "paddingTop": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarBorderSize": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "height": "100%",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "progressHeight": 10,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingBottom": 4,
  "progressBottom": 0,
  "transitionMode": "blending",
  "id": "MainViewer",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderRadius": 0,
  "width": "100%",
  "toolTipBorderRadius": 3,
  "progressBarBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "progressBorderSize": 0,
  "progressBarBorderSize": 0,
  "transitionDuration": 300,
  "paddingRight": 0,
  "toolTipBorderSize": 1
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "class": "ThumbnailList",
  "paddingLeft": 0,
  "itemThumbnailShadowBlurRadius": 8,
  "itemThumbnailShadowHorizontalLength": 3,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "selectedItemLabelFontSize": 17,
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "paddingBottom": 0,
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 20,
  "shadow": false,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "backgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "rollOverItemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.43%",
  "rollOverItemLabelFontColor": "#0099CC",
  "itemOpacity": 1,
  "itemThumbnailShadow": true,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "paddingRight": 0,
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": []
 },
 {
  "borderSize": 0,
  "class": "IconButton",
  "paddingLeft": 0,
  "mode": "toggle",
  "width": 86,
  "horizontalAlign": "center",
  "height": 71.5,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
  "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
  "minWidth": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "shadow": false,
  "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button49930"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "transparencyActive": true,
  "paddingTop": 0,
  "right": "19.83%",
  "paddingRight": 0
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "class": "IconButton",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "toolTipPaddingLeft": 6,
  "width": 112.65,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 69.1,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "borderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTip": "Fullscreen",
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 1,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 128,
  "toolTipPaddingBottom": 4,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "bottom": "0.05%",
  "toolTipBorderColor": "#767676",
  "shadow": false,
  "toolTipFontColor": "#606060",
  "toolTipBorderRadius": 3,
  "transparencyActive": true,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "maxHeight": 128,
  "toolTipFontSize": 12,
  "right": "0.02%",
  "paddingRight": 0,
  "toolTipPaddingRight": 6
 },
 {
  "borderSize": 0,
  "class": "IconButton",
  "paddingLeft": 0,
  "mode": "toggle",
  "width": 84.7,
  "horizontalAlign": "center",
  "height": 68.9,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
  "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
  "minWidth": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "shadow": false,
  "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button1166"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "transparencyActive": true,
  "paddingTop": 0,
  "right": "16.1%",
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "class": "IconButton",
  "paddingLeft": 0,
  "mode": "toggle",
  "width": 76.65,
  "horizontalAlign": "center",
  "height": 72.85,
  "borderRadius": 0,
  "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
  "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
  "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
  "minWidth": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "minHeight": 0,
  "shadow": false,
  "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button49925"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "transparencyActive": true,
  "left": "26.66%",
  "paddingTop": 0,
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "borderRadius": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "cursor": "hand",
  "maxWidth": 1694,
  "minHeight": 1,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "Image18054"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145,
  "paddingRight": 0
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "height": "6.604%",
  "width": "9.212%",
  "borderRadius": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1412,
  "minHeight": 1,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "Image18131"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 800,
  "right": "24.72%",
  "paddingRight": 0
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "scroll",
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#67B2D2",
   "#FFFFFF",
   "#67B2D2",
   "#000000"
  ],
  "paddingLeft": 0,
  "gap": 10,
  "contentOpaque": false,
  "horizontalAlign": "left",
  "height": "32.233%",
  "width": "28.605%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "shadowSpread": 1,
  "scrollBarWidth": 10,
  "shadowBlurRadius": 22,
  "backgroundColorRatios": [
   0,
   0.02,
   0.03,
   0.92,
   1
  ],
  "backgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadowVerticalLength": 5,
  "visible": false,
  "minHeight": 1,
  "shadow": true,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "shadowHorizontalLength": -5,
  "backgroundOpacity": 0.92,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "top",
  "bottom": "5.82%",
  "shadowColor": "#000000",
  "left": "5.86%",
  "paddingTop": 0,
  "layout": "absolute",
  "paddingRight": 0,
  "scrollBarOpacity": 0,
  "shadowOpacity": 0.73
 },
 {
  "borderSize": 0,
  "class": "Label",
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "fontSize": 42,
  "width": "9.11%",
  "height": "4.481%",
  "textDecoration": "none",
  "borderRadius": 0,
  "text": "Floor Plan",
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minWidth": 1,
  "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/41399/mountain-view-homes-bremerton/bremerton/tempo/\", \"_blank\")",
  "paddingBottom": 0,
  "minHeight": 1,
  "shadow": false,
  "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
  "backgroundOpacity": 0,
  "data": {
   "name": "Label20305"
  },
  "verticalAlign": "middle",
  "bottom": "0.68%",
  "fontColor": "#000000",
  "left": "17.65%",
  "paddingTop": 0,
  "paddingRight": 0
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_DF0D199F_C35E_368D_41E5_C24F4F08911C.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; }
 },
 "paddingBottom": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})