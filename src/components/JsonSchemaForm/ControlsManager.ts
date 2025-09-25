import type { ControlType, ControlComponent, IControlsManager } from '@/types/schema'

class ControlsManager implements IControlsManager {
  private controls: {
    list: ControlComponent[]
    map: Record<ControlType, ControlComponent>
  } = { list: [], map: {} as Record<ControlType, ControlComponent> }

  register (key: ControlType, control: ControlComponent): void {
    const { list, map } = this.controls
    if (!map[key]) {
      list.push(control)
      map[key] = control
    } else {
      console.warn(`Control with key ${key} is already registered.`)
    }
  }

  getControl (key: ControlType): ControlComponent | undefined {
    return this.controls.map[key]
  }

  getControls (): ControlComponent[] {
    return this.controls.list
  }
}

export default ControlsManager
