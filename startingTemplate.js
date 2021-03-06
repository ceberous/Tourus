"use strict";

var canvas;
var engine;
var scene;

document.addEventListener("DOMContentLoaded" , startBabylonJS , false);

function startBabylonJS() {

	if (BABYLON.Engine.isSupported()) {

		canvas = document.getElementById("renderCanvas");
		engine = new BABYLON.Engine(canvas , true);
        
        scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera" , 0 , Math.PI / 2 , 13 , BABYLON.Vector3.Zero() , scene );
        camera.attachControl(canvas , false);
        var light = new BABYLON.HemisphericLight("ligth" , new BABYLON.Vector3( 0 , 1 , 0 ) , scene);

        var knot = BABYLON.Mesh.CreateTorusKnot("mesh" , 2 , 0.5 , 128 , 64 , 2 , 50 , scene );
        var material = new BABYLON.StandardMaterial("mat" , scene);
        material.diffuseColor = new BABYLON.Color3(1.5 , 0 , 0);
        knot.material = material;

		
		// once the scene has loaded, 
			// just create a render loop to render it
		var renderLoop = function() {
            scene.render();
        };
        engine.runRenderLoop(renderLoop);
	}

}

