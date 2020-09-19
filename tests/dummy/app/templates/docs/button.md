# Button

Users click on buttons to make choices and complete tasks.

## Guidelines

- Use buttons to show the user what actions they can take.
- When a button is clicked, use a selected state (or a loading indicator) to show the status of their actions.
- Buttons have a minimum width of 96 pixels.
- Use minimal padding on all platoforms-desktop and mobile.

## Hierarchy

Make the user's decision easy by visually directing them to the most important action.

### Primary CTA's

- Highly emphasized
- Primary brand color
- Limited to one per page

### Secondary CTA's

- Medium emphasis
- Secondary brand color

## Icon Accessibility

When using only an icon as a button, add the `aria-label` attribute to the icon so a screen reader can describe its meaning.

## Content

- Button text should state - in three words or less - exactly what the button does or where it takes the user.
- buttons can contain text, icons, or both.

## Implementation Details

### Variants

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @variant   | 'primary' <br>\| 'secondary' <br>\| 'tertiary' <br>\| 'primaryOutlined' <br>\| 'secondaryOutlined' <br>\| 'tertiaryOutlined' <br>\| 'offCard' <br>\| 'simpleText' <br>\| 'icon' <br>\| 'iconPrimary' | | true | Changes the visual appearance of the button. |

<Button::Variant />

### With an Icon

<Button::Icon />

### Size
| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @size | '1' \| '2' \| '3' \| '4' | | false | Changes the size of the button |

<Button::Size />

### Loading

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @isLoading | boolean | false | false | Hides text and displays a loading spinner on the button |

<Button::Loading />

### Disabled

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| disabled | boolean | | false | Makes button disabled both visually and functionally |

<Button::Disabled />
