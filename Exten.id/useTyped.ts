import Typed, { type TypedOptions } from 'typed.js';

export function useTyped(options: TypedOptions): { typedElement: Ref<HTMLElement | null> } {
    const typedElement = ref<HTMLElement | null>(null);

    let typedInstance: Typed | null = null;

    onMounted(() => {
        if (typedElement.value) {
            typedInstance = new Typed(typedElement.value, options);
        }
    });

    onUnmounted(() => {
        if (typedInstance) {
            typedInstance.destroy();
        }
    });

    return {
        typedElement
    };
}