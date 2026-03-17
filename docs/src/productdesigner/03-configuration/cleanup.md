# Cleanup

<img srcset="/productdesigner/images/cleanup.png 2x" class="border">

The cleanup page lets you remove unused files and database records to free up space.

## Clean unused files and records older than

Select the age threshold for cleanup. Files and records used in orders will not be deleted.

## Operations

Select which data to clean up:

- **Clean up old designs** — removes old design records that are not used in orders
- **Clean up old saved designs** — removes old saved design records (Saved by customers to their profile)
- **Clean up old uploads** — removes uploaded files no longer in use (That do not belong to any order)
- **Clean module cache** — clears the module cache
- **Clean items which belong to a deleted design** — removes orphaned items linked to deleted designs

## Cron key

A secret key used to authenticate the cron request.

## Cron link

The URL to call via cron to run the cleanup automatically. Schedule this URL to run periodically (e.g. daily) in your server's cron job manager.

## Clean data

Click **Clean data** to run the cleanup immediately with the selected options.
