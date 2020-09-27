# Action Banner

Action Banners are full width banners that usually appear above the site header. They span the full window width and are dismissible.

They come in two variants: **Warning** and **Error.**

## Best Practices

- Include an icon to the left of the copy
- Copy and icon are centered within the banner
- Do not include marketing content
- Content should alert the user to a system or account status
- Action Banners do not appear based on a user’s action

## Implementation Details

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @show   | boolean | false | true | Determines whether the action banner will be visible |
| @variant   | 'warning' <br />\| 'error' | | true | Determines the color variant that will be displayed |
| @onClose   | action | | true | The action that should fire when user hits close |

### Action Banner Usage

<ActionBanner::States />

### Content Below

<ActionBanner::ContentBelow />
