

precomp3();
function precomp3() {

app.beginUndoGroup("Pre-comp 3");

try {

// CREATE FOLDER HIERARCHY START
	var solids_folder_properties = {"name":"Solids","typeName":"Folder","label":2,"comment":""};
	var solids_folder = findProjectItem(app.project.rootFolder, false, solids_folder_properties);
	if (solids_folder === null) {
		solids_folder = app.project.items.addFolder(solids_folder_properties.name);
		solids_folder.label = solids_folder_properties.label;
	}
	var particularassets_folder_properties = {"name":"Particular_Assets","typeName":"Folder","label":2,"comment":""};
	var particularassets_folder = findProjectItem(app.project.rootFolder, false, particularassets_folder_properties);
	if (particularassets_folder === null) {
		particularassets_folder = app.project.items.addFolder(particularassets_folder_properties.name);
		particularassets_folder.label = particularassets_folder_properties.label;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var precomp3_comp_properties = {"name":"Pre-comp 3","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0.09019607843137,0.09019607843137,0.09019607843137],"duration":24.024024024024,"numLayers":1,"frameRate":29.9700012207031};
	var precomp3_comp = app.project.items.addComp(precomp3_comp_properties.name, precomp3_comp_properties.width, precomp3_comp_properties.height, precomp3_comp_properties.pixelAspect, precomp3_comp_properties.duration, precomp3_comp_properties.frameRate);
		precomp3_comp.time = 12.7794461127794;
		precomp3_comp.bgColor = precomp3_comp_properties.bgColor;
		precomp3_comp.shutterPhase = -90;
		precomp3_comp.resolutionFactor = [4, 4];
	var precomp2_comp_properties = {"name":"Pre-comp 2","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":24.024024024024,"numLayers":5,"frameRate":29.9700012207031};
	var precomp2_comp = findProjectItem(app.project.rootFolder, false, precomp2_comp_properties);
	var precomp2_comp_populate = false;
	if (precomp2_comp === null) {
		precomp2_comp = app.project.items.addComp(precomp2_comp_properties.name, precomp2_comp_properties.width, precomp2_comp_properties.height, precomp2_comp_properties.pixelAspect, precomp2_comp_properties.duration, precomp2_comp_properties.frameRate);
		precomp2_comp.time = 12.7794461127794;
		precomp2_comp.bgColor = precomp2_comp_properties.bgColor;
		precomp2_comp.shutterPhase = -90;
		precomp2_comp.resolutionFactor = [4, 4];
		precomp2_comp.motionBlur = true;
		precomp2_comp.frameBlending = true;
		if (precomp2_comp.markerProperty !== undefined) {
			var newMarkerParameters = {};
			var precomp2_comp_marker1 = new MarkerValue("5");
				precomp2_comp_marker1.eventCuePoint = true;
				precomp2_comp_marker1.setParameters(newMarkerParameters);
				precomp2_comp.markerProperty.setValueAtTime(11.0777444110777, precomp2_comp_marker1);
			var precomp2_comp_marker2 = new MarkerValue("4");
				precomp2_comp_marker2.eventCuePoint = true;
				precomp2_comp_marker2.setParameters(newMarkerParameters);
				precomp2_comp.markerProperty.setValueAtTime(12.379045712379, precomp2_comp_marker2);
		}
		precomp2_comp_populate = true;
	}
	var second_comp_properties = {"name":"second","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":1.33466800133467,"numLayers":1,"frameRate":29.9700012207031};
	var second_comp = findProjectItem(app.project.rootFolder, false, second_comp_properties);
	var second_comp_populate = false;
	if (second_comp === null) {
		second_comp = app.project.items.addComp(second_comp_properties.name, second_comp_properties.width, second_comp_properties.height, second_comp_properties.pixelAspect, second_comp_properties.duration, second_comp_properties.frameRate);
		second_comp.time = 1.3013013013013;
		second_comp.bgColor = second_comp_properties.bgColor;
		second_comp.dropFrame = true;
		second_comp.shutterPhase = -90;
		second_comp.displayStartTime = 11.7451782226563;
		second_comp.resolutionFactor = [4, 4];
		second_comp.motionBlur = true;
		second_comp.frameBlending = true;
		second_comp_populate = true;
	}
	var firts_comp_properties = {"name":"firts","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":8.70870870870871,"numLayers":2,"frameRate":29.9700012207031};
	var firts_comp = findProjectItem(app.project.rootFolder, false, firts_comp_properties);
	var firts_comp_populate = false;
	if (firts_comp === null) {
		firts_comp = app.project.items.addComp(firts_comp_properties.name, firts_comp_properties.width, firts_comp_properties.height, firts_comp_properties.pixelAspect, firts_comp_properties.duration, firts_comp_properties.frameRate);
		firts_comp.time = 1.66833500166833;
		firts_comp.bgColor = firts_comp_properties.bgColor;
		firts_comp.dropFrame = true;
		firts_comp.shutterPhase = -90;
		firts_comp.displayStartTime = 1407.17395019531;
		firts_comp.resolutionFactor = [4, 4];
		firts_comp.motionBlur = true;
		firts_comp.frameBlending = true;
		firts_comp_populate = true;
	}
// CREATE COMPOSITIONS END

// IMPORT FOOTAGE ITEMS START
	var cubeWireframemov_footage_properties = {"name":"Cube Wireframe.mov","typeName":"Footage","label":3,"comment":"","mainSource":{"file":{"fullName":"/c/ProgramData/Red Giant/Trapcode Packs/TC14/Sprites/Common/3D Geometric Shapes/Cube Wireframe.mov"}}};
	var cubeWireframemov_footage = findProjectItem(particularassets_folder, false, cubeWireframemov_footage_properties);
	if (cubeWireframemov_footage === null) {
		var cubeWireframemov_importOptions = new ImportOptions(new File(cubeWireframemov_footage_properties.mainSource.file.fullName));
		cubeWireframemov_footage = app.project.importFile(cubeWireframemov_importOptions);
		cubeWireframemov_footage.label = cubeWireframemov_footage_properties.label;
		cubeWireframemov_footage.mainSource.premulColor = [0,0,0];
		cubeWireframemov_footage.mainSource.fieldSeparationType = FieldSeparationType.OFF;
		cubeWireframemov_footage.parentFolder = particularassets_folder;
		cubeWireframemov_footage.selected = false;
	}
// IMPORT FOOTAGE ITEMS END

// CREATE SOLID LAYERS START
	var blackSolid1_solid_properties = {"name":"Black Solid 1","typeName":"Footage","comment":"","label":1,"pixelAspect":1,"height":1080,"width":1920,"mainSource":{"color":[0,0,0]}};
	var blackSolid1_solid = findProjectItem(solids_folder, false, blackSolid1_solid_properties);
	if (blackSolid1_solid === null) {
		var blackSolid1_tempSolid = precomp3_comp.layers.addSolid(blackSolid1_solid_properties.mainSource.color, blackSolid1_solid_properties.name, blackSolid1_solid_properties.width, blackSolid1_solid_properties.height, blackSolid1_solid_properties.pixelAspect);
			blackSolid1_solid = blackSolid1_tempSolid.source;
			blackSolid1_solid.label = blackSolid1_solid_properties.label;
			blackSolid1_solid.parentFolder = solids_folder;
		blackSolid1_tempSolid.remove();
	}
	var whiteSolid1_solid_properties = {"name":"White Solid 1","typeName":"Footage","comment":"","label":1,"pixelAspect":1,"height":1080,"width":1920,"mainSource":{"color":[0.98823499679565,0.98823499679565,0.98823499679565]}};
	var whiteSolid1_solid = findProjectItem(solids_folder, false, whiteSolid1_solid_properties);
	if (whiteSolid1_solid === null) {
		var whiteSolid1_tempSolid = precomp3_comp.layers.addSolid(whiteSolid1_solid_properties.mainSource.color, whiteSolid1_solid_properties.name, whiteSolid1_solid_properties.width, whiteSolid1_solid_properties.height, whiteSolid1_solid_properties.pixelAspect);
			whiteSolid1_solid = whiteSolid1_tempSolid.source;
			whiteSolid1_solid.label = whiteSolid1_solid_properties.label;
			whiteSolid1_solid.parentFolder = solids_folder;
		whiteSolid1_tempSolid.remove();
	}
// CREATE SOLID LAYERS END

// Working with comp "Pre-comp 3", varName "precomp3_comp";
	precomp3_comp.openInViewer();
	// Add existing composition "Pre-comp 2", varName "precomp2_comp";
	var precomp2 = precomp3_comp.layers.add(precomp2_comp);
		precomp2.moveToEnd();
		var precomp2_marker1 = new MarkerValue("5");
			precomp2_marker1.eventCuePoint = true;
			var newMarkerParameters = {};
			precomp2_marker1.setParameters(newMarkerParameters);
			precomp2.property("ADBE Marker").setValueAtTime(11.7450784117451, precomp2_marker1);
		var precomp2_marker2 = new MarkerValue("4");
			precomp2_marker2.eventCuePoint = true;
			var newMarkerParameters = {};
			precomp2_marker2.setParameters(newMarkerParameters);
			precomp2.property("ADBE Marker").setValueAtTime(13.5802469135802, precomp2_marker2);
		precomp2.selected = false;
// Working with comp "Pre-comp 2", varName "precomp2_comp";
if (precomp2_comp_populate === true) {
	// Add Light "LayerEmit [tomoya x nagisa afte", varName "layeremitTomoyaXNagisaAfte";
	var layeremitTomoyaXNagisaAfte = precomp2_comp.layers.addLight("LayerEmit main", [960, 540]);
		layeremitTomoyaXNagisaAfte.lightType = LightType.SPOT;
		layeremitTomoyaXNagisaAfte.enabled = false;
		layeremitTomoyaXNagisaAfte.shy = true;
		layeremitTomoyaXNagisaAfte.moveToEnd();
		layeremitTomoyaXNagisaAfte.property("ADBE Transform Group").property("ADBE Position").setValue([960,540,0]);
		layeremitTomoyaXNagisaAfte.selected = false;
	// Add existing Solid Layer "Black Solid 1", varName "blackSolid1_solid";
	var blackSolid1 = precomp2_comp.layers.add(blackSolid1_solid);
		blackSolid1.inPoint = 12.379045712379;
		blackSolid1.outPoint = 13.5802469135802;
		blackSolid1.motionBlur = true;
		blackSolid1.moveToEnd();
		if (blackSolid1.property("ADBE Effect Parade").canAddProperty("tc Particular")) {
			blackSolid1.property("ADBE Effect Parade").addProperty("tc Particular");
		} else {
			return alert("Cannot apply \"Particular 2\" (tc Particular) effect to layer \"" + blackSolid1.name + "\" because you don't have this effect installed on your system.");
		}
		blackSolid1.property("ADBE Effect Parade").property(1).name = "Particular 2";
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0146").setValue(174580);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0005").setValue(6);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0581").setValue([960,540,186]);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0113").setValue(2);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0011").setValue(700);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0012").setValue(69);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0577").setValue(2);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0659").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0230").setValue(117700);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0002").setValue(0.5);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0065").setValue(50);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0026").setValue(4);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0029").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0027").setValue(6);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0074").setValue(100);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0075").setValue(50);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0656").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0017").setValue(0.69999694824219);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0022").setValue(-744);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0023").setValue(-76);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0024").setValue(-1130);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-2164").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-2707").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-2704").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-2199").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-4212").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-4755").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-4752").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-4247").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-6260").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-6803").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-6800").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-6295").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-8308").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-8851").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-8848").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-8343").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-10356").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-10899").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-10896").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-10391").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-12404").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-12947").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-12944").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-12439").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-14452").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-14995").setValue(0);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-14992").setValue(1);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-14487").setValue(1);
		blackSolid1.selected = false;
	// Add existing composition "second", varName "second_comp";
	var second = precomp2_comp.layers.add(second_comp);
		second.startTime = 11.7450784117451;
		second.motionBlur = true;
		second.threeDLayer = true;
		second.moveToEnd();
		second.timeRemapEnabled = true;
		var secondTimeRemap = second.property("ADBE Time Remapping");
			secondTimeRemap.setValueAtTime(99999, secondTimeRemap.keyValue(1));
			secondTimeRemap.removeKey(2);
			secondTimeRemap.removeKey(1);
			var secondTimeRemap_keyTimesArray = [12.379045712379,12.8795462128795];
			var secondTimeRemap_valuesArray = [0,1.33466800133467];
			secondTimeRemap.setValuesAtTimes(secondTimeRemap_keyTimesArray, secondTimeRemap_valuesArray);
			secondTimeRemap.removeKey(secondTimeRemap.nearestKeyIndex(99999));
			var secondTimeRemap_easeInSpeedArray = [0,-8.41062835488238e-8];
			var secondTimeRemap_easeInInfluArray = [33.333333,100];
			var secondTimeRemap_easeOutSpeedArray = [-4.23261235504846e-8,0];
			var secondTimeRemap_easeOutInfluArray = [0.1,16.666666667];
			var secondTimeRemap_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var secondTimeRemap_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(secondTimeRemap, secondTimeRemap_keyTimesArray, [secondTimeRemap_easeInSpeedArray, secondTimeRemap_easeInInfluArray], [secondTimeRemap_easeOutSpeedArray, secondTimeRemap_easeOutInfluArray], [secondTimeRemap_keyInInterpolationType, secondTimeRemap_keyOutInterpolationType]);

		second.selected = false;
	// Add existing composition "firts", varName "firts_comp";
	var firts = precomp2_comp.layers.add(firts_comp);
		firts.startTime = 10.4104104104104;
		firts.inPoint = 11.7450784117451;
		firts.outPoint = 13.0797464130797;
		firts.motionBlur = true;
		firts.moveToEnd();
		firts.timeRemapEnabled = true;
		var firtsTimeRemap = firts.property("ADBE Time Remapping");
			firtsTimeRemap.setValueAtTime(99999, firtsTimeRemap.keyValue(1));
			firtsTimeRemap.removeKey(2);
			firtsTimeRemap.removeKey(1);
			var firtsTimeRemap_keyTimesArray = [12.9129129129129];
			var firtsTimeRemap_valuesArray = [1.65165165165165];
			firtsTimeRemap.setValuesAtTimes(firtsTimeRemap_keyTimesArray, firtsTimeRemap_valuesArray);
			firtsTimeRemap.removeKey(firtsTimeRemap.nearestKeyIndex(99999));
		firts.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		firts.property("ADBE Mask Parade").property(1).name = "Mask 1";
		firts.property("ADBE Mask Parade").property(1).color = [0.66274509803922, 0.79607843137255, 0.78039215686275];
		var firtsMaskPath = firts.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
			var firtsMaskPath_keyTimesArray = [12.379045712379, 12.8128128128128];
			var firtsMaskPath_object = {};
				firtsMaskPath_object.closed = true;
				firtsMaskPath_object.vertices = [[[1088.19738769531, 135.25617980957], [502.087280273438, 135.25617980957], [502.087280273438, 1100.49340820313], [1088.19738769531, 1100.49340820313]], [[1088.19738769531, 135.25617980957], [1014.42126464844, 135.25617980957], [1014.42126464844, 1100.49340820313], [1088.19738769531, 1100.49340820313]]];
			addShapeKeyframes(firtsMaskPath, firtsMaskPath_keyTimesArray, firtsMaskPath_object);
			var firtsMaskPath_easeInSpeedArray = [0,0];
			var firtsMaskPath_easeInInfluArray = [33.333333,84.171280211636];
			var firtsMaskPath_easeOutSpeedArray = [0,0];
			var firtsMaskPath_easeOutInfluArray = [0.1,16.666666667];
			var firtsMaskPath_keyInInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			var firtsMaskPath_keyOutInterpolationType = [KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER];
			applyEasing(firtsMaskPath, firtsMaskPath_keyTimesArray, [firtsMaskPath_easeInSpeedArray, firtsMaskPath_easeInInfluArray], [firtsMaskPath_easeOutSpeedArray, firtsMaskPath_easeOutInfluArray], [firtsMaskPath_keyInInterpolationType, firtsMaskPath_keyOutInterpolationType]);

		firts.property("ADBE Mask Parade").property(1).property("ADBE Mask Feather").setValue([37,37]);
		firts.selected = false;
	// Add existing footage item "Cube Wireframe.mov", varName "cubeWireframemov_footage";
	var particularSpriteMaster = precomp2_comp.layers.add(cubeWireframemov_footage);
		particularSpriteMaster.name = "Particular Sprite Master";
		particularSpriteMaster.enabled = false;
		particularSpriteMaster.moveToEnd();
		particularSpriteMaster.selected = false;


	// Apply outOfRange values
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0115").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0066").setValue(5);

	// Apply parents
		layeremitTomoyaXNagisaAfte.setParentWithJump(second);

}
// Working with comp "second", varName "second_comp";
if (second_comp_populate === true) {
	// Add existing composition "firts", varName "firts_comp";
	var firts1 = second_comp.layers.add(firts_comp);
		firts1.startTime = -1.33466800133467;
		firts1.inPoint = 0;
		firts1.outPoint = 1.33466800133467;
		firts1.motionBlur = true;
		firts1.moveToEnd();
		firts1.timeRemapEnabled = true;
		var firts1TimeRemap = firts1.property("ADBE Time Remapping");
			firts1TimeRemap.setValueAtTime(99999, firts1TimeRemap.keyValue(1));
			firts1TimeRemap.removeKey(2);
			firts1TimeRemap.removeKey(1);
			var firts1TimeRemap_keyTimesArray = [1.16783450116783];
			var firts1TimeRemap_valuesArray = [1.65165165165165];
			firts1TimeRemap.setValuesAtTimes(firts1TimeRemap_keyTimesArray, firts1TimeRemap_valuesArray);
			firts1TimeRemap.removeKey(firts1TimeRemap.nearestKeyIndex(99999));
		firts1.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
		firts1.property("ADBE Mask Parade").property(1).name = "Mask 1";
		firts1.property("ADBE Mask Parade").property(1).color = [0.90980392156863, 0.57254901960784, 0.05098039215686];
		var firts1MaskPath = firts1.property("ADBE Mask Parade").property(1).property("ADBE Mask Shape");
			var firts1MaskPath_keyTimesArray = [0, 1.3013013013013];
			var firts1MaskPath_object = {};
				firts1MaskPath_object.closed = true;
				firts1MaskPath_object.vertices = [[[538.975341796875, -26.6413726806641], [418.064514160156, -26.6413726806641], [418.064514160156, 1120.98669433594], [538.975341796875, 1120.98669433594]], [[1125.08471679688, -2.04934692382813], [1004.17395019531, -2.04934692382813], [1004.17395019531, 1145.57873535156], [1125.08471679688, 1145.57873535156]]];
			addShapeKeyframes(firts1MaskPath, firts1MaskPath_keyTimesArray, firts1MaskPath_object);
		firts1.property("ADBE Mask Parade").property(1).property("ADBE Mask Feather").setValue([84,84]);
		firts1.selected = false;


	// Apply outOfRange values
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0115").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0066").setValue(5);

}
// Working with comp "firts", varName "firts_comp";
if (firts_comp_populate === true) {
	var yourFootage = firts_comp.layers.addText("YOUR FOOTAGE");
		yourFootage.name = "YOUR FOOTAGE";
		yourFootage.moveToEnd();
		var yourFootage_TextProp = yourFootage.property("ADBE Text Properties").property("ADBE Text Document");
		var yourFootage_TextDocument = yourFootage_TextProp.value;
			yourFootage_TextDocument.font = "Morganite-BlackItalic";
			yourFootage_TextDocument.fontSize = 275;
			yourFootage_TextDocument.applyFill = true;
			yourFootage_TextDocument.fillColor = [1,0.21569000184536,0.21569000184536];
			yourFootage_TextDocument.applyStroke = false;
			yourFootage_TextDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
			yourFootage_TextDocument.tracking = 16;
			if (parseFloat(app.version) >= 13.2 ) {
				yourFootage_TextDocument.verticalScale = 1;
				yourFootage_TextDocument.horizontalScale = 1;
				yourFootage_TextDocument.baselineShift = 0;
				yourFootage_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// yourFootage_TextDocument.fauxBold = false;
				// yourFootage_TextDocument.fauxItalic = false;
				// yourFootage_TextDocument.allCaps = true;
				// yourFootage_TextDocument.smallCaps = false;
				// yourFootage_TextDocument.superscript = false;
				// yourFootage_TextDocument.subscript = false;
			}
			if (parseFloat(app.version) >= 13.6 ) {
				yourFootage_TextDocument.leading = 245;
				yourFootage_TextDocument.autoLeading = false;
			}
			yourFootage_TextProp.setValue(yourFootage_TextDocument);
		yourFootage.property("ADBE Transform Group").property("ADBE Position").setValue([949.273956298828,636.112507641315,0]);
		yourFootage.selected = false;
	// Add existing Solid Layer "White Solid 1", varName "whiteSolid1_solid";
	var whiteSolid1 = firts_comp.layers.add(whiteSolid1_solid);
		whiteSolid1.moveToEnd();
		whiteSolid1.property("ADBE Effect Parade").addProperty("ADBE Checkerboard");
		whiteSolid1.property("ADBE Effect Parade").property(1).name = "Checkerboard";
		whiteSolid1.property("ADBE Effect Parade").property(1).property("ADBE Checkerboard-0004").setValue(97);
		whiteSolid1.selected = false;


	// Apply outOfRange values
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0115").setValue(3);
		blackSolid1.property("ADBE Effect Parade").property(1).property("tc Particular-0066").setValue(5);

}

// Remove empty Solids folder
	var tempNullComp = app.project.items.addComp("tempNullComp", 100, 100, 1, 1, 24);
	var tempNullLayer = tempNullComp.layers.addNull();
	var nullFolder = tempNullLayer.source.parentFolder;
		tempNullLayer.source.remove();
		tempNullComp.remove();
	if (nullFolder.numItems === 0)
		nullFolder.remove();
precomp3_comp.openInViewer();

return {
	compItem : precomp3_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

function applyEasing(property, keyTimesArray, easeInArray, easeOutArray, keyInterpolationArray) {
	var easeIn, easeOut, easeIn0, easeOut0, easeIn1, easeOut1, easeIn2, easeOut2;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		if (property.propertyValueType === PropertyValueType.TwoD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1], [easeOut0, easeOut1]);
		} else if (property.propertyValueType === PropertyValueType.ThreeD) {
			easeIn0 = new KeyframeEase(easeInArray[0][i][0], easeInArray[1][i][0]);
			easeOut0 = new KeyframeEase(easeOutArray[0][i][0], easeOutArray[1][i][0]);
			easeIn1 = new KeyframeEase(easeInArray[0][i][1], easeInArray[1][i][1]);
			easeOut1 = new KeyframeEase(easeOutArray[0][i][1], easeOutArray[1][i][1]);
			easeIn2 = new KeyframeEase(easeInArray[0][i][2], easeInArray[1][i][2]);
			easeOut2 = new KeyframeEase(easeOutArray[0][i][2], easeOutArray[1][i][2]);
			property.setTemporalEaseAtKey(i+1, [easeIn0, easeIn1, easeIn2], [easeOut0, easeOut1, easeOut2]);
		} else {
			easeIn = new KeyframeEase(easeInArray[0][i], easeInArray[1][i]);
			easeOut = new KeyframeEase(easeOutArray[0][i], easeOutArray[1][i]);
			if (keyInterpolationArray[1][i] !== KeyframeInterpolationType.HOLD) {
				property.setTemporalEaseAtKey(i+1, [easeIn], [easeOut]);
			} else {
				property.setTemporalEaseAtKey(i+1, [easeIn]);
			}
		}
		property.setInterpolationTypeAtKey(i+1, keyInterpolationArray[0][i], keyInterpolationArray[1][i]);
	}
}

function addShapeKeyframes(myPath, keyTimesArray, myShapeObject) {
	var valuesArray = [], newShape;
	for (var i = 0, il = keyTimesArray.length; i < il; i ++) {
		newShape = new Shape();
		for (var prop in myShapeObject) {
			if (myShapeObject[prop] instanceof Array) { newShape[prop] = myShapeObject[prop][i]; }
			else { newShape[prop] = myShapeObject[prop]; }
		}
		valuesArray.push(newShape);
	}
	myPath.setValuesAtTimes(keyTimesArray, valuesArray);
}

}

