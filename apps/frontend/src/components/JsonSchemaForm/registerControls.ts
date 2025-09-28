import FormInput from '@/components/JsonSchemaForm/Controls/FormInput'
import FormRadio from '@/components/JsonSchemaForm/Controls/FormRadio'
import ControlsManager from '@/components/JsonSchemaForm/ControlsManager.ts'

const controlsManager = new ControlsManager()
controlsManager.register('radio', FormRadio)
controlsManager.register('input', FormInput)

export default controlsManager
