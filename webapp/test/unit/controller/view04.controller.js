/*global QUnit*/

sap.ui.define([
	"my/sapui5/act04/training/act04mvc/controller/view04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("view04 Controller");

	QUnit.test("I should test the view04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
