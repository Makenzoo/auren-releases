# AUREN releases

This public repository hosts downloadable AUREN application builds and the launcher catalog (`latest.json`). Application installers are published as GitHub Release assets. The launcher reads the catalog from this repository and verifies every downloaded file with SHA-256.

The build workflow belongs in the **private source repository**. Before its first run, add an Actions secret named `AUREN_RELEASE_TOKEN` there. The token must have `Contents: read and write` access to this release repository so the workflow can create releases and update `latest.json`.

Do not upload application source code, AUREN Admin, signing private keys, customer license files, or credentials here. The catalog remains empty until the first signed-app build is published.

Customers download the AUREN Launcher and use it to install POS, Back Office, and Server. A valid license issued by AUREN Admin is required when each application starts.