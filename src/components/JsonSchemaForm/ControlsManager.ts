class ControlsManager {
  controls: {
    list: any[],
    map: Record<string, any>
  } = { list: [], map: {} }

  register (key: string, control: any) {
    const { list, map } = this.controls
    if (!map[key]) {
      list.push(control)
      map[key] = control
    } else {
      console.warn(`Control with key ${key} is already registered.`)
    }
  }

  getControl (key: string) {
    return this.controls.map[key]
  }

  getControls () {
    return this.controls.list
  }
}

export default ControlsManager
