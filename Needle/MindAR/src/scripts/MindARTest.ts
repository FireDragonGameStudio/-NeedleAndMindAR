import { Behaviour, serializable } from "@needle-tools/engine";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";

export class MindARTest extends Behaviour {
    @serializable(THREE.Object3D)
    trackableGameObject: THREE.Object3D | null = null;

    start() {
        const mindarThree = new MindARThree({
            container: document.querySelector("#container"),
            imageTargetSrc: "https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind",
        });

        let { renderer, scene, camera } = mindarThree;

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(this.trackableGameObject);

        // MindAR default sample
        // const geometry = new THREE.PlaneGeometry(1, 0.55);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });
        // const plane = new THREE.Mesh(geometry, material);
        // anchor.group.add(plane);

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
