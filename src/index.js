import { State, Document, Block, Text } from 'slate';

/**
 * Plugin to prevent an empty document.
 *
 * @param {String|Block} type
 */
function NoEmpty(type) {
    type = typeof type == 'string' ?
        Block.create({
            type,
            nodes: [
                Text.create()
            ]
        }) : type;

    const onBeforeChange = (state) => {
        const { document } = state;

        // If document is not empty, it continues
        if (!document.nodes.isEmpty()) {
            return;
        }

        // Reset the state
        return State.create({
            document: Document.create({
                nodes: [type]
            })
        });
    };

    return {
        onBeforeChange
    };
}

export default NoEmpty;
