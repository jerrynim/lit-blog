import AFRAME from "aframe";

console.log("here");
var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive("a-ocean2", {
    // Attaches the `ocean` component by default.
    // Defaults the ocean to be parallel to the ground.
    defaultComponents: {
        ocean: {},
        rotation: { x: -90, y: 0, z: 0 },
    },

    // Maps HTML attributes to the `ocean` component's properties.
    mappings: {
        width: "ocean.width",
        depth: "ocean.depth",
        density: "ocean.density",
        color: "ocean.color",
        opacity: "ocean.opacity",
    },
});
