# Input

Input fields collect a single line of text.

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @value   | string | | true | Value that is displayed in text input |
| @before   | string | | false | Add text or icon here which shows as in front of the input field |
| @after   | string | | false | Add text or icon here which shows as after of the input field |
| @invalid   | boolean | false | false | Adds red border and sets aria-invalid attribute |
| @disabled   | boolean | false | false | Sets the input to be disabled |

## Input Usage

### Basic Usage

<Input::Basic />

### Prefix and Postfix Icons

<Input::Icons />
