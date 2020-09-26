# Checkbox

A checkbox can have 3 states:

- Checked
- Unchecked
- Intermediate

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @checked   | boolean \| 'mixed' | false | true | Determines whether the checkbox is checked, unchecked, or intermediate state |
| @invalid   | boolean | false | false | Shows red border and sets aria-invalid attribute |
| @onChange   | action | | true | Fires when input is interacted with |

## Checkbox Usage

### Basic Usage 

<Checkbox::Unchecked />
<Checkbox::Checked />
<Checkbox::Intermediate />
<Checkbox::Invalid />

### Implicit vs Explicit Checkbox labels

To make checkboxes accessible, you must use one of the two label associations: **explicit** or **implicit**.

**Explicit labels** connect to the input using the htmlFor prop, while **implicit labels** wrap around the input. These associations allow you to toggle the checkbox by clicking the label text.

<Checkbox::ExplicitImplicit />
