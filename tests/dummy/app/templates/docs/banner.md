# Banner

Banners are used (sparingly) to communicate important information.

## Types of Banners

### Info (blue)

- Info banners are used to politely inform a user of helpful information.

### Success (green)

- Success banners notify the user of a successful action.
- This can also be a [Toaster](toaster).

### Warning (yellow)

- Warning banners notify the user of problems they could face when interacting with the product.

### Error (red)

- Error banners alert the user when something has gone wrong—a technical issue or user error (i.e. failed login).

## Best Practices

- Limit one Banner per page or content area.
- Must have a title; subtitle is optional. Good titles are short but informative.
- Don’t swap out the pre-selected icons.
- Banners can have links in them (but not in the title).
- Dismissible Banners can have the small X icon at the top right (16x16 pixels).

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @variant | 'success' \| 'warning' \| 'error' \| 'info' | | true | Determines the color of the banner displayed |
| @as   | element | div | false | Renders as the element/component you pass in. |
| @header   | text | | false | Text to be displayed in the header element |

### All Variation

<Banner::Basic />

### Message with Link

<Banner::Link />

