# Radio

Radio buttons are used to make a single selection among a number of options.

## Best Practices

- The user cannot select multiple radio buttons.
- Radio buttons can be preselected.

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @checked   | boolean | false | true | Controls whether the radio is checked |
| @invalid   | boolean | false | false | Shows red border |

## Radio Usage

### Basic Usage

Use the "checked" prop to display the checked value and the "invalid" prop to display field is in error.

<Radio::Basic />

### Accessibility

There are a couple ways to make your radio inputs accessible.

#### Using fieldset and legend

In the following example, the fieldset and legend will notify the screen reader when focus enters a radio input.

*Note: The fieldset and legend will apply styling your design may not call for, but this can be changed with CSS.*

<Radio::Accessibility />

#### Using aria attributes

<Radio::Aria />
