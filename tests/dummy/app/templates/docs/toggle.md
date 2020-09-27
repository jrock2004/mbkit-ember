# Toggle

Use Toggles to turn things on and off.

## Best Practices

- The toggle action should be immediate and apparent.
- Feedback is optional

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @checked   | boolean | false | true | Determines whether the toggle is toggled |
| @size   | 1 \| 2 |  | false | Changes the size of the toggle input |

### Basic Usage

Under the hood, Toggle is a checkbox.

<Toggle::Basic />

### Disabled State

<Toggle::Disabled />

### Label with Toggle

<Toggle::Label />
