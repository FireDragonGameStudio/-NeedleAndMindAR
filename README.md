# First test of Needle Engine with MindAR.js

This is just a quick test of how to integrate MindAR.js into the Needle Engine (https://github.com/needle-tools/needle-engine-support). A working prototype can be found here - https://prairie-broken-crowd.glitch.me/ Make sure to have the marker images available to test the tracking.

The sample is based on the default three.js image tracking samples (https://hiukim.github.io/mind-ar-js-doc/more-examples/threejs-image), with a few adjustments. The adjusted script can be found at ./Projects/IntegrationOfARjs/src/scripts/ARjsMarkerTracking.ts. Within the Unity project you can switch between enabling MindARTesting and MindARImageTracking gameobjects. Depending on which object is active you can either use one of the following combinations:

- MindARTesting for simple image marker tracking https://hiukim.github.io/mind-ar-js-doc/assets/images/card-06cb9111a8e32627db6bfafc7aa22a4d.png
- MindARImageTracking for multiple markers https://hiukim.github.io/mind-ar-js-doc/assets/images/bear-3c737546fb0bde7a9c45b45ee999d132.png and https://hiukim.github.io/mind-ar-js-doc/assets/images/raccoon-2ef571baece2ee4724d0d19edf3de791.png

Pls note that this is just a POC. I won't provide actual support for this, apart from my personal development interests. For any questions about Needle Engine reach out to https://needle.tools/ and join their Discord. The community is lively and really helpful! Great team there :)

## Where is the MindAR.js stuff located?

When following the path  Projects/NeedleAndMindAR/Needle/MindAR/src/scripts/MindARImage.ts and MindARTest.ts you'll find the Typescript components for handling all the MindAR.js stuff. It's pretty straight forward, implementing a very basic sample.

# Issues

- MindAR.js was added via npm (https://www.npmjs.com/package/mind-ar).
- When on mobile, tracking works best in Portrait mode and in Chrome. When changing to Landscape the tracking and camera image will behave strange. This is likely an issue of AR.js, issue is already opened.
- When using FaceTracking the tracking will have an offset, due to some issues from MindAR, when using it on mobile platforms.
- MindAR.js creates its own three.js scene context, which doesn't allow you to share things like lightining or other things directly. So using it in a productive way is not recommended.
