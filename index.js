exports.ClientMod = class {
  constructor(mod) {
    if(mod.majorPatchVersion > 101) {
      mod.log("unsupported patch version")
      return;
    }
  }
  
  install(installer) {
     installer.gpk("S1UI_GameModeSelectScene.gpk");
  }
};