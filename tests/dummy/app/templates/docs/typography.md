# Typography

A helper for displaying text

## Heading Props

| Name  | Type | Default | Required | Description|
| ----- | ------------------------------------------------------------------------------- | ---- | ---- | ---- |
| @as    | 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'                                    |  | true | This will be the actual rendered element. Keep your headings and content semantic |
| @size  | 1 \| 2 \| 3 \| 4 \| 5 \| 6                                                      |  | false | Use this when you need to render some heading element but it needs to look a different size |
| @color | 'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'meta' |  | true | Sets the text color. By default we use our brand foreground |

<Typography::Heading />

## Link Props

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @route | string |  | false | The ember route you want to navigate to |
| @href  | string |  | false | If you want to link to somewhere outside the app |

<Typography::Link />

## Text Props

| Name  | Type | Default | Required | Description|
| ----- | ------ | ---- | ---- | ---- |
| @as | element |  | false | This will be the actual rendered element |
| @size  | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 |  | false | Change the size of the output. See the Theme provider for what these sizes will look like |
| @color  | 'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'meta' |  | false | Sets the text color. By default we use our brand foreground |

<Typography::Text />
