import {useState} from 'react'

type ValueType = string | null
type SetValueType = (text: string) => Promise<boolean>

function useCopyToClipboard(): [ValueType, SetValueType] {
    const [value, setValueText] = useState<ValueType>(null)

    const setValue: SetValueType = async text => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
        }

        try {
            await navigator.clipboard.writeText(text)
            setValueText(text)
            return true
        } catch (error) {
            console.warn('Copy failed', error)
            setValueText(null)
            return false
        }
    }

    return [value, setValue]
}

export default useCopyToClipboard

type setValueType = (text: string | null) => Promise<boolean>
