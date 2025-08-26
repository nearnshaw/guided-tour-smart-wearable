import { ColliderLayer, engine, GltfContainer, InputAction, inputSystem, Material, MeshCollider, MeshRenderer, pointerEventsSystem, Transform, VideoPlayer } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { EntityNames } from '../assets/scene/entity-names'

export function main() {

	addScreen()
}


export function addScreen() {

	const screen = engine.getEntityOrNullByName(EntityNames.Video_Screen)

	if (!screen) {
		return
	}

	const transform = Transform.getMutable(screen)
	transform.position = { x: 0, y: 2, z: 5 }
	transform.scale = { x: 1.6, y: 0.9, z: 0.625 }
	transform.parent = engine.CameraEntity





}


