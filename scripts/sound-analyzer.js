(function() {
  'use strict';
  angular.module('dmk.sound.analyzer', []).directive('dmkSoundAnalyzer', [
    function() {
      return {
        restrict: 'A',
        templateUrl: '/bower_components/dmk-menu/templates/dmk-sound-analyzer.html',
        scope: {
          dmkName: "=",
          dmkUrl: "=",
          dmkStart: "=",
          dmkVol: "="
        },
        link: function(scope, element, attrs) {
          var canvas, createScene, engine, scene;
          canvas = document.getElementById("renderCanvas");
          engine = new BABYLON.Engine(canvas, true);
          createScene = function() {
            var analyzerSound, camera, music, scene;
            scene = new BABYLON.Scene(engine);
            camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
            music = new BABYLON.Sound(scope.dmkName, scope.dmkUrl, scene, null, {
              loop: false,
              autoplay: scope.dmkStart,
              volume: scope.dmkVol
            });
            analyzerSound = new BABYLON.Analyser(scene);
            BABYLON.Engine.audioEngine.connectToAnalyser(analyzerSound);
            analyzerSound.drawDebugCanvas();
            return scene;
          };
          scene = createScene();
          engine.runRenderLoop(function() {
            scene.render();
          });
        }
      };
    }
  ]);
})();
