TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_t.jpg"
   }
  ],
  "id": "panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012516",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_t.jpg"
 },
 {
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "preloadEnabled": false,
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -180,
   "pitch": 90
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 32.03,
     "yawSpeed": 63.35,
     "targetYaw": 26.54,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -80.53,
     "path": "shortest"
    },
    {
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9,
     "targetYaw": 27.32,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 30.16,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "label": "Duplex_No1-Zoom Out",
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
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D_t.jpg"
 },
 {
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_t.jpg"
   }
  ],
  "id": "panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012504",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_t.jpg"
 },
 {
  "id": "panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -55.89,
   "pitch": 3.62
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "targetYaw": 42.42,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": -1.01,
     "path": "shortest"
    },
    {
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "targetYaw": 96.02,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 0.16,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_t.jpg"
   }
  ],
  "id": "panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012506",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_t.jpg"
 },
 {
  "id": "panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 52.55,
   "pitch": 0.81
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "targetYaw": -75.76,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 0.22,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_t.jpg"
   }
  ],
  "id": "panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012507",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_t.jpg"
 },
 {
  "id": "panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.72,
   "pitch": 1.64
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": 131.54,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 1.55,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_t.jpg"
   }
  ],
  "id": "panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012531",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_t.jpg"
 },
 {
  "id": "panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -29.2,
   "pitch": 1.18
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "targetYaw": 169.07,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 11.76,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_t.jpg"
   }
  ],
  "id": "panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012508",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_t.jpg"
 },
 {
  "automaticRotationSpeed": 52,
  "id": "panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.49,
   "pitch": -2.17
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 14.32,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 14.32,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 14.32,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_t.jpg"
   }
  ],
  "id": "panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012509",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_t.jpg"
 },
 {
  "id": "panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.62,
   "pitch": 5.37
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "targetYaw": -165.86,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 0.14,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_t.jpg"
   }
  ],
  "id": "panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012510",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_t.jpg"
 },
 {
  "id": "panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -74.77,
   "pitch": -1.14
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "targetYaw": 121.37,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 1.55,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_t.jpg"
   }
  ],
  "id": "panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012511",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_t.jpg"
 },
 {
  "id": "panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.02,
   "pitch": 5.24
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "targetYaw": 103.76,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 0.63,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_t.jpg"
   }
  ],
  "id": "panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012512",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_t.jpg"
 },
 {
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 13.79,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 13.79,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 13.79,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 35000
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_t.jpg"
   }
  ],
  "id": "panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012513",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_t.jpg"
 },
 {
  "id": "panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.76,
   "pitch": 6.05
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "targetYaw": -81.37,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -0.43,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "label": "Duplex_No1-No Sound",
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
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0_t.jpg"
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_t.jpg"
   }
  ],
  "id": "panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012517",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_t.jpg"
 },
 {
  "id": "panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -180,
   "pitch": 90
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": 10.45,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -89.91,
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": -3,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 35.18,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_t.jpg"
   }
  ],
  "id": "panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012518",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_t.jpg"
 },
 {
  "id": "panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.68,
   "pitch": 9.27
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 29.89,
     "yawSpeed": 59.05,
     "targetYaw": -103.95,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 1.78,
     "path": "longest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_t.jpg"
   }
  ],
  "id": "panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012519",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_t.jpg"
 },
 {
  "id": "panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.67,
   "pitch": -4.39
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": -71.38,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 1.61,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_t.jpg"
   }
  ],
  "id": "panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012520",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_t.jpg"
 },
 {
  "id": "panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.63,
   "pitch": 3.61
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": -164.76,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 5.17,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_t.jpg"
   }
  ],
  "id": "panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012530",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_t.jpg"
 },
 {
  "id": "panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -162.9,
   "pitch": 34.41
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 32.03,
     "yawSpeed": 63.35,
     "targetYaw": -47.44,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 8.48,
     "path": "longest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_t.jpg"
   }
  ],
  "id": "panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012521",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_t.jpg"
 },
 {
  "id": "panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -53.13,
   "pitch": 2.55
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "targetYaw": -131.04,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 9.98,
     "path": "shortest"
    },
    {
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "targetYaw": 36.84,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 10.72,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_t.jpg"
   }
  ],
  "id": "panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012522",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_t.jpg"
 },
 {
  "id": "panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 34.31,
   "pitch": 5.81
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "targetYaw": -171.79,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 3.22,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811_t.jpg"
   }
  ],
  "id": "panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012523",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0263858_BAF1_E672_41E0_0C22CA242811_t.jpg"
 },
 {
  "id": "panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 6.66,
   "pitch": -1.42
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": -94.67,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 2.6,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_t.jpg"
   }
  ],
  "id": "panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012524",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_t.jpg"
 },
 {
  "id": "panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.58,
   "pitch": 1.62
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 26.68,
     "yawSpeed": 52.6,
     "targetYaw": -118.39,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 0.97,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_t.jpg"
   }
  ],
  "id": "panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012525",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_t.jpg"
 },
 {
  "id": "panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 46.46,
   "pitch": 9.28
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 27.75,
     "yawSpeed": 54.75,
     "targetYaw": -54.39,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 12.31,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_t.jpg"
   }
  ],
  "id": "panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012526",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_t.jpg"
 },
 {
  "id": "panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.92,
   "pitch": 7.02
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 34.17,
     "yawSpeed": 67.65,
     "targetYaw": 19.59,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 9.31,
     "path": "shortest"
    },
    {
     "pitchSpeed": 29.89,
     "yawSpeed": 59.05,
     "targetYaw": 174.39,
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "targetPitch": 1.83,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_t.jpg"
   }
  ],
  "id": "panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012527",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_t.jpg"
 },
 {
  "id": "panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 112.66,
   "pitch": 1.43
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5,
     "targetYaw": -67.68,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 8.69,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_t.jpg"
   }
  ],
  "id": "panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012528",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_t.jpg"
 },
 {
  "id": "panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0.47,
   "pitch": 3.38
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 15.91,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 15.91,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 15.91,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
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
    },
    "thumbnailUrl": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_t.jpg"
   }
  ],
  "id": "panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
  "pitch": 0,
  "vfov": 180,
  "class": "Panorama",
  "label": "R0012529",
  "hfovMax": 120,
  "hfovMin": 60,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_t.jpg"
 },
 {
  "id": "panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -118.36,
   "pitch": 25.36
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "pitchSpeed": 38.45,
     "yawSpeed": 76.25,
     "targetYaw": -177.8,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": 3.98,
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetYaw": 136.65,
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "targetPitch": -0.76,
     "path": "shortest"
    },
    {
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "targetHfov": 100,
     "targetYaw": 120.43,
     "class": "TargetPanoramaCameraMovement",
     "hfovSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.81,
     "path": "shortest"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12, this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
    "class": "PanoramaPlayListItem",
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03BE5A8_BAF1_6ED2_41DB_9BD5FCBB40A8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, this.video_A95CB75A_BBD3_6B7D_41D3_7378CFA55F8D)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B00AF92E_BAF0_E62E_41E3_D0E392D8799F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0219DA6_BAF1_1EDE_41BD_4F9849B66301_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03AE497_BAF1_2EFF_41DB_10397016A46B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B00A61FC_BAF1_6632_41CB_70A34C099066_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B028FBB7_BAF1_3A3F_41C8_452BEE7DAE97_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03112A8_BAF1_2AD2_41E1_F2D876C2C2B6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05F79A7_BAF1_26DF_41DD_9210C52CB00C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05EC075_BAF1_6632_41E6_3CC3202A377C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B03AF78E_BAF1_6AEE_41DF_71AC111565FA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B04CAE93_BAF1_7AF6_41DA_781465C356F2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, this.video_AB5E1DA6_BBDC_DFD4_41A3_113C15071AE0)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B1F14D45_BAF1_1E53_41E4_2780E746C7AC_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0086475_BAF1_2E32_41C5_C2BFBFADB68C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0352B93_BAF1_3AF6_41B8_98C7A3FAC81E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B026F2DE_BAF1_2A71_41DF_03F435D5BAB6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B1F97A99_BAF1_1AF3_41D4_DE57CC94FB60_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 18)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0108A06_BAF1_25DE_41E3_EFEAC05FEB8E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 18, 19)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B034111E_BAF1_E7EE_41BC_1853FC4FEFC9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 19, 20)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0263858_BAF1_E672_41E0_0C22CA242811_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 20, 21)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B022DF56_BAF1_FA7E_41D2_985EAE25A90D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 21, 22)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B0231687_BAF1_EADE_41CD_CB6162155A5C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 22, 23)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B05F8D80_BAF1_1ED1_41C6_3BC0E4B88D0E_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 23, 24)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B026C4A8_BAF1_2ED2_41A0_612F282D1B4C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 24, 25)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B024DBC7_BAF1_3A5F_41E0_E71A4B3ADEC2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 25, 26)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_B04DD2DE_BAF1_2A71_41E2_DF2CAFEF58C8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 26, 0)"
   }
  ]
 }
], "children": [
 {
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadHeight": 15,
  "progressBorderSize": 0,
  "playbackBarLeft": 0,
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "toolTipDisplayTime": 600,
  "class": "ViewerArea",
  "paddingLeft": 0,
  "toolTipOpacity": 1,
  "shadow": false,
  "playbackBarOpacity": 1,
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "progressBackgroundColorRatios": [
   0
  ],
  "minHeight": 50,
  "borderSize": 0,
  "playbackBarHeadShadow": true,
  "toolTipFontSize": 12,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderSize": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "toolTipFontFamily": "Arial",
  "playbackBarBorderColor": "#FFFFFF",
  "height": "100%",
  "progressLeft": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "paddingBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "transitionMode": "blending",
  "progressBarBorderSize": 0,
  "playbackBarRight": 0,
  "playbackBarBorderRadius": 0,
  "paddingTop": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minWidth": 100,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "toolTipShadowSpread": 0,
  "id": "MainViewer",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingTop": 4,
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "transitionDuration": 300,
  "progressBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBottom": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipFontWeight": "normal",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "verticalAlign": "top",
  "rollOverItemLabelFontSize": 15,
  "rollOverItemBackgroundOpacity": 0,
  "itemMode": "normal",
  "paddingRight": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "rollOverItemLabelFontColor": "#0099CC",
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarWidth": 10,
  "layout": "vertical",
  "class": "ThumbnailList",
  "paddingLeft": 0,
  "itemLabelPosition": "bottom",
  "itemBorderRadius": 0,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadow": true,
  "rollOverItemLabelTextDecoration": "none",
  "itemThumbnailOpacity": 1,
  "shadow": false,
  "itemLabelFontColor": "#FFFFFF",
  "gap": 1,
  "horizontalAlign": "left",
  "minHeight": 20,
  "itemBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "itemThumbnailShadowBlurRadius": 8,
  "itemPaddingLeft": 3,
  "itemOpacity": 1,
  "selectedItemLabelFontSize": 17,
  "itemHorizontalAlign": "center",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailBorderRadius": 50,
  "itemThumbnailWidth": 136,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorRatios": [],
  "backgroundOpacity": 0,
  "itemThumbnailShadowOpacity": 0.54,
  "itemBackgroundColor": [],
  "width": 185.05,
  "selectedItemLabelTextDecoration": "underline",
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "height": "74.709%",
  "paddingBottom": 0,
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontWeight": "normal",
  "paddingTop": 0,
  "scrollBarColor": "#FFFFFF",
  "itemLabelFontSize": 14,
  "minWidth": 20,
  "itemBackgroundOpacity": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "top": "9.43%",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "itemPaddingBottom": 3,
  "itemLabelGap": 0,
  "itemVerticalAlign": "middle",
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailHeight": 87,
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelTextDecoration": "none",
  "itemLabelFontFamily": "Arial",
  "itemPaddingTop": 3,
  "right": "0.03%",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarMargin": 2,
  "itemPaddingRight": 3
 },
 {
  "verticalAlign": "middle",
  "transparencyActive": true,
  "mode": "toggle",
  "width": 86,
  "height": 71.5,
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minWidth": 0,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
  "cursor": "hand",
  "shadow": false,
  "minHeight": 0,
  "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
  "borderSize": 0,
  "data": {
   "name": "Button49930"
  },
  "bottom": "0%",
  "backgroundOpacity": 0,
  "right": "19.83%"
 },
 {
  "toolTipTextShadowOpacity": 0,
  "verticalAlign": "middle",
  "toolTipTextShadowColor": "#000000",
  "transparencyActive": true,
  "toolTipBorderRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "mode": "toggle",
  "toolTipFontFamily": "Arial",
  "width": 112.65,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontStyle": "normal",
  "height": 69.1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "toolTipShadowColor": "#333333",
  "toolTipDisplayTime": 600,
  "paddingTop": 0,
  "class": "IconButton",
  "paddingLeft": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "minWidth": 1,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "borderRadius": 0,
  "toolTipBorderSize": 1,
  "cursor": "hand",
  "maxWidth": 128,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowOpacity": 1,
  "minHeight": 1,
  "toolTipFontColor": "#606060",
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "borderSize": 0,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipPaddingTop": 4,
  "bottom": "0.05%",
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "toolTipFontSize": 12,
  "toolTip": "Fullscreen",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "maxHeight": 128,
  "toolTipPaddingLeft": 6,
  "toolTipPaddingBottom": 4,
  "right": "0.02%",
  "backgroundOpacity": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipFontWeight": "normal",
  "toolTipShadowHorizontalLength": 0
 },
 {
  "verticalAlign": "middle",
  "transparencyActive": true,
  "mode": "toggle",
  "width": 84.7,
  "height": 68.9,
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "minWidth": 0,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
  "cursor": "hand",
  "shadow": false,
  "minHeight": 0,
  "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "borderSize": 0,
  "data": {
   "name": "Button1166"
  },
  "bottom": "0%",
  "backgroundOpacity": 0,
  "right": "16.1%"
 },
 {
  "verticalAlign": "middle",
  "transparencyActive": true,
  "mode": "toggle",
  "width": 76.65,
  "height": 72.85,
  "paddingRight": 0,
  "paddingBottom": 0,
  "class": "IconButton",
  "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
  "paddingLeft": 0,
  "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
  "horizontalAlign": "center",
  "minWidth": 0,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
  "borderRadius": 0,
  "cursor": "hand",
  "shadow": false,
  "minHeight": 0,
  "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
  "borderSize": 0,
  "data": {
   "name": "Button49925"
  },
  "bottom": "0%",
  "left": "26.66%",
  "backgroundOpacity": 0
 },
 {
  "verticalAlign": "middle",
  "maxHeight": 145,
  "width": "37.846%",
  "paddingRight": 0,
  "height": "5.582%",
  "paddingBottom": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "paddingTop": 0,
  "class": "Image",
  "paddingLeft": 0,
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "horizontalAlign": "center",
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "borderRadius": 0,
  "top": "0.05%",
  "cursor": "hand",
  "maxWidth": 1694,
  "minHeight": 1,
  "shadow": false,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "borderSize": 0,
  "data": {
   "name": "Image18054"
  },
  "left": "29.2%",
  "backgroundOpacity": 0
 },
 {
  "verticalAlign": "middle",
  "width": "9.212%",
  "paddingRight": 0,
  "height": "6.604%",
  "paddingBottom": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingTop": 0,
  "class": "Image",
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1412,
  "minHeight": 1,
  "shadow": false,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "borderSize": 0,
  "data": {
   "name": "Image18131"
  },
  "maxHeight": 800,
  "right": "24.72%",
  "backgroundOpacity": 0
 },
 {
  "children": [
   {
    "playbackBarHeadShadowBlurRadius": 3,
    "progressBarBackgroundColorRatios": [
     0
    ],
    "playbackBarHeadOpacity": 1,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipTextShadowBlurRadius": 3,
    "progressBorderRadius": 0,
    "toolTipTextShadowColor": "#000000",
    "toolTipShadowBlurRadius": 3,
    "playbackBarHeadShadowVerticalLength": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarHeadHeight": 15,
    "progressBorderSize": 0,
    "playbackBarLeft": 0,
    "paddingRight": 0,
    "progressBarOpacity": 1,
    "toolTipDisplayTime": 600,
    "class": "ViewerArea",
    "paddingLeft": 0,
    "toolTipOpacity": 1,
    "shadow": false,
    "playbackBarOpacity": 1,
    "borderRadius": 0,
    "progressBackgroundOpacity": 1,
    "toolTipBorderColor": "#767676",
    "toolTipFontColor": "#606060",
    "progressBackgroundColorRatios": [
     0
    ],
    "minHeight": 1,
    "borderSize": 0,
    "playbackBarHeadShadow": true,
    "toolTipFontSize": 12,
    "progressBarBackgroundColorDirection": "vertical",
    "progressOpacity": 1,
    "progressRight": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "playbackBarHeadBorderRadius": 0,
    "playbackBarBackgroundOpacity": 1,
    "playbackBarHeadShadowColor": "#000000",
    "toolTipTextShadowOpacity": 0,
    "playbackBarBorderSize": 0,
    "toolTipBorderRadius": 3,
    "playbackBarProgressOpacity": 1,
    "toolTipFontFamily": "Arial",
    "playbackBarBorderColor": "#FFFFFF",
    "height": "90.003%",
    "progressLeft": 0,
    "playbackBarProgressBorderRadius": 0,
    "toolTipFontStyle": "normal",
    "paddingBottom": 0,
    "playbackBarProgressBorderColor": "#000000",
    "width": "93.76%",
    "toolTipShadowColor": "#333333",
    "transitionMode": "blending",
    "progressBarBorderSize": 0,
    "playbackBarRight": 0,
    "playbackBarBorderRadius": 0,
    "paddingTop": 0,
    "playbackBarHeadWidth": 6,
    "playbackBarHeight": 10,
    "playbackBarHeadShadowOpacity": 0.7,
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "minWidth": 1,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "toolTipBorderSize": 1,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarProgressBorderSize": 0,
    "progressBarBorderRadius": 0,
    "toolTipShadowOpacity": 1,
    "toolTipShadowSpread": 0,
    "id": "MapViewer",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingTop": 4,
    "bottom": "5%",
    "playbackBarBottom": 0,
    "transitionDuration": 500,
    "progressBorderColor": "#000000",
    "progressBackgroundColorDirection": "vertical",
    "progressHeight": 10,
    "playbackBarHeadShadowHorizontalLength": 0,
    "progressBottom": 2,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "left": "3.06%",
    "toolTipPaddingRight": 6,
    "toolTipPaddingLeft": 6,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "toolTipPaddingBottom": 4,
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "playbackBarHeadBorderSize": 0,
    "playbackBarHeadBorderColor": "#000000",
    "toolTipFontWeight": "normal",
    "toolTipShadowHorizontalLength": 0
   }
  ],
  "overflow": "scroll",
  "verticalAlign": "top",
  "backgroundColor": [
   "#FFFFFF",
   "#67B2D2",
   "#FFFFFF",
   "#67B2D2",
   "#000000"
  ],
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "creationPolicy": "inAdvance",
  "width": "28.605%",
  "paddingRight": 0,
  "height": "32.233%",
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "layout": "absolute",
  "scrollBarOpacity": 0,
  "scrollBarWidth": 10,
  "shadowVerticalLength": 5,
  "paddingTop": 0,
  "class": "Container",
  "paddingLeft": 0,
  "shadowOpacity": 0.73,
  "shadow": true,
  "scrollBarVisible": "rollOver",
  "minWidth": 1,
  "borderRadius": 0,
  "visible": false,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "minHeight": 1,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "borderSize": 0,
  "bottom": "5.82%",
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.02,
   0.03,
   0.92,
   1
  ],
  "shadowHorizontalLength": -5,
  "shadowSpread": 1,
  "data": {
   "name": "Container18244"
  },
  "left": "5.86%",
  "backgroundOpacity": 0.92,
  "gap": 10,
  "shadowBlurRadius": 22
 },
 {
  "verticalAlign": "middle",
  "width": "9.11%",
  "paddingRight": 0,
  "height": "4.481%",
  "paddingBottom": 0,
  "fontFamily": "Arial",
  "text": "Floor Plan",
  "fontSize": 42,
  "fontStyle": "normal",
  "class": "Label",
  "paddingLeft": 0,
  "textDecoration": "none",
  "fontColor": "#000000",
  "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/41399/mountain-view-homes-bremerton/bremerton/tempo/\", \"_blank\")",
  "fontWeight": "normal",
  "minWidth": 1,
  "paddingTop": 0,
  "borderRadius": 0,
  "shadow": false,
  "horizontalAlign": "center",
  "minHeight": 1,
  "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
  "data": {
   "name": "Label20305"
  },
  "bottom": "0.68%",
  "borderSize": 0,
  "left": "17.65%",
  "backgroundOpacity": 0
 }
], 
 "horizontalAlign": "left",
 "overflow": "visible",
 "verticalAlign": "top",
 "scripts": {
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getKey": function(key){  return window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "class": "Player",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "borderRadius": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "minHeight": 20,
 "id": "rootPlayer",
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player463"
 },
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "vrPolyfillScale": 0.5
})