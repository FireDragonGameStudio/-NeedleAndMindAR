import { Behaviour, serializable } from "@needle-tools/engine";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import { Object3D } from "three";

export class MindARImage extends Behaviour {
    @serializable(Object3D)
    firstTrackableGameObject: Object3D | null = null;
    @serializable(Object3D)
    secondTrackableGameObject: Object3D | null = null;

    start() {
        const mindarThree = new MindARThree({
            container: document.querySelector("#container"),
            imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/band-example/band.mind",
            maxTrack: 2,
        });

        let { renderer, scene, camera } = mindarThree;

        const firstAnchor = mindarThree.addAnchor(0);
        firstAnchor.group.add(this.firstTrackableGameObject);
        const secondAnchor = mindarThree.addAnchor(1);
        secondAnchor.group.add(this.secondTrackableGameObject);

        const start = async () => {
            await mindarThree.start();
            renderer.setAnimationLoop(() => {
                if (camera) {
                    renderer.render(scene, camera);
                }
            });
        };
        const startButton = document.querySelector("#startButton");
        if (startButton) {
            startButton.addEventListener("click", () => {
                start();
            });
        }
        const stopButton = document.querySelector("#stopButton");
        if (stopButton) {
            stopButton.addEventListener("click", () => {
                mindarThree.stop();
                mindarThree.renderer.setAnimationLoop(null);
            });
        }
    }
}
