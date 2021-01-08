# IFTTT Webhook Action

A GitHub action that triggers an [IFTTT webhooks](https://ifttt.com/maker_webhooks)
event. This is useful for example when you want to trigger a IFTTT webhook after
anything you want to trigger a notice at ifttt.

## Usage


```yaml
steps:
  - uses: actionsflow/ifttt-webhook-action@v1
    with:
      event: your-webhook-event
      key: your-webhook-secret-key
      value1: optional-value
      value2: optional-value
      value3: optional-value
```
