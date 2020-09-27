# Textarea

Textareas are used for long-form text input.

## Best Practices

- Placeholder text is optional.
- Character limits should be set on a case-by-case basis.
- By default, set a minimum height for the textarea. If gathering a lot of data, set a max height and allow it to scroll. 

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @value   | string | | true | Value that is displayed in the textarea |
| @invalid   | boolean | | false | Shows red border around textarea |

## Textarea Usage

### Explicit and Implicit Labels

Both examples are semantic HTML and will be read by a screen reader.

<Textarea::Basic />

### Invalid and Disabled States

<Textarea::Invalid />
