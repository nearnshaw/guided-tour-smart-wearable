import { AvatarAnchorPointType, AvatarAttach, ColliderLayer, engine, GltfContainer, InputAction, inputSystem, Material, MeshCollider, MeshRenderer, pointerEventsSystem, Transform, VideoPlayer, VisibilityComponent } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { EntityNames } from '../assets/scene/entity-names'
import { syncEntity } from '@dcl/sdk/network'
import { getPlayer } from '@dcl/sdk/src/players'
import { getTriggerEvents, getActionEvents } from '@dcl/asset-packs/dist/events'

export function main() {

	addScreen()



	const umbrellaTrigger = engine.getEntityOrNullByName(EntityNames.umbrellaTrigger)

	if (umbrellaTrigger) {
		const umbrellaActions = getActionEvents(umbrellaTrigger)

		umbrellaActions.on("Activate Umbrella", (event) => {
			addUmbrella()
		})

		umbrellaActions.on("Deactivate Umbrella", (event) => {
			//TODO
			//removeUmbrella()
		})
	}



}


export function addScreen() {

	const screen = engine.getEntityOrNullByName(EntityNames.Video_Screen)

	if (!screen) {
		return
	}

	const transform = Transform.getMutable(screen)
	transform.position = { x: 3, y: 2, z: 4.5 }
	transform.scale = { x: 1.6, y: 0.9, z: 0.625 }
	transform.parent = engine.CameraEntity


}


export function addUmbrella() {

	const umbrellaParent = engine.addEntity()


	let myPlayer = getPlayer()?.userId

	AvatarAttach.create(umbrellaParent, {
		anchorPointId: AvatarAnchorPointType.AAPT_NAME_TAG,
		avatarId: myPlayer,	
	})

	const umbrella = engine.addEntity()


	Transform.create(umbrella, { position: { x: 0.3, y: 1, z: 0 }, rotation: Quaternion.fromEulerDegrees(180, 0, 0), scale: { x: 1, y: 1, z: 1 },
		parent: umbrellaParent
	})
	GltfContainer.create(umbrella, { src: "assets/asset-packs/umbrella/umbrella.glb", visibleMeshesCollisionMask: ColliderLayer.CL_NONE, invisibleMeshesCollisionMask: ColliderLayer.CL_NONE })

	syncEntity(umbrella, [])


}

