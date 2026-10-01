---
title: Edubuntu 26.10 Beta Released
date: 2026-10-01
author: Amy Eickmeyer & Erich Eickmeyer
summary: Edubuntu 26.10 Beta Released (EOL)
---

# Edubuntu 26.10 Beta Released

The Edubuntu Council (Amy and Erich Eickmeyer) is pleased to announce Edubuntu 26.10 Beta, codenamed “Stonking Stingray”. While it is free of any showstopper installer bugs and is representative of what will be the final release, bugs will be found within.

**Edubuntu 26.10 is a standard release and will be supported for 9 months, until July 2027.** We encourage everyone to try this image and report bugs to improve our final release.

Desktop (amd64) and Raspberry Pi 5 (arm64+raspi) images may be downloaded from [https://cdimages.ubuntu.com/edubuntu/releases/26.10/beta](https://cdimages.ubuntu.com/edubuntu/releases/26.10/beta).

## New Features

Edubuntu 26.10 builds on the 26.04 LTS release with the following improvements:

* This release includes **GNOME 51**.
* **Edubuntu Installer** (1.1.1) gains **expandable per-metapackage package selection** in the GTK4 and Qt6 interfaces as well as the Cockpit module, letting you pick individual packages within a learning-profile metapackage instead of all-or-nothing installs.
* **Edubuntu Menu Administration** adds **GNOME Resources** and **Font Viewer** to the Utilities folder, and **SuperCollider IDE** and **Sonic Pi** entries to the Music folder.
* **Sonic Pi**, a live-coding music environment, is now in the for the Music Education metapackage. We believe this not only teaches music, but also teaches programming in a Python-like environment. It combines programming, mathematics, and music.

## Known Issues

* The [wrong mascot](https://launchpad.net/bugs/2169073) is shown upon installation completion in the amd64 images.
* The Ubuntu welcome app branding does not match Edubuntu. [We’re working on ways to resolve this](https://launchpad.net/bugs/2060817).
* As Edubuntu shares a desktop with and is based on Ubuntu Desktop, any known issues can be found in the official [Ubuntu Release Notes](https://documentation.ubuntu.com/release-notes/26.10/).
* Individual applications included with Edubuntu may have their own known issues. Please consult upstream release notes for those applications before filing bug reports.
