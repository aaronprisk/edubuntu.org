---
title: Edubuntu 26.10 Released
date: 2026-10-15
author: Amy Eickmeyer & Erich Eickmeyer
summary: Edubuntu 26.10 Released
---

![Edubuntu Banner consisting of graduates thowing caps in an arc|center,75%](images/edubuntu_2610_banner.png)

# Edubuntu 26.10 Released: "Stonking Stingray"

The Edubuntu Council is pleased to announce the release of **Edubuntu 26.10**, codenamed "Stonking Stingray." This interim release builds on the foundation of our 26.04 LTS release, bringing newer software, refinements to the Edubuntu Installer and Menu Administration tools, and more resources for music and creative learning. It is supported for **9 months, until July 2027**.

Edubuntu 26.10 is a great fit for educators and administrators who want the latest desktop technology and are comfortable upgrading at each release. Institutions that prefer long-term stability should continue to use **Edubuntu 26.04 LTS**, which is supported until April 2029.

---

## Technical Release Information

| | |
|---|---|
| **Release Date** | October 15, 2026 |
| **Codename** | Stonking Stingray |
| **Support Period** | 9 months (until July 2027) |
| **Architectures** | amd64/Intel, Raspberry Pi 5 (arm64+raspi) |
| **Download** | [cdimages.ubuntu.com/edubuntu/releases/26.10/release](https://cdimages.ubuntu.com/edubuntu/releases/26.10/release) |

---

## Major Enhancements

### Desktop Environment & Technology

- **GNOME 51** brings the latest improvements in performance, usability, and polish to the Edubuntu desktop
- **Linux kernel 7.3** provides updated hardware support and performance improvements
- **Edubuntu GRUB branding:** The boot menu now identifies the system as Edubuntu
- **Refreshed branding assets:** Fixes to the System → About logo, and the correct Edubuntu mascot is now shown when installation completes on amd64 (fixed since the beta, [LP: #2169073](https://launchpad.net/bugs/2169073))

### Edubuntu Installer & Administration Tools

The Edubuntu Installer (now at version 1.1) gains finer control over what gets installed, in the desktop (GTK4/Qt6) interfaces and the Cockpit module alike:

- **Expandable package lists:** Each metapackage can be expanded to show its individual Depends and Recommends packages
- **Individual package selection:** Install or remove specific Depends and Recommends entries directly, with checkbox behavior that better matches what the APT resolver expects
- **Configurable metapackage list:** A new `metapackages.json` file lets administrators and the project control which metapackages are shown, and whether each one displays its Depends and Recommends
- **Shared configuration:** The same metapackage configuration is used by the desktop and Cockpit interfaces, so remote administration matches local behavior
- **Multilingual Support:** Translations refreshed for all 21 supported languages, including full installer slideshow localization

Edubuntu Menu Administration adds more apps to the default menu layout:

- **Music folder:** **Sonic Pi** and **SuperCollider IDE** are now included
- **Utilities folder:** **GNOME Resources** and **Font Viewer** are now included

### Applications & Content Tools

**Music & Creative Coding:**
- **Sonic Pi:** Live-coding music environment, now part of the `ubuntu-edu-music` metapackage. It teaches music and programming together in a Python-like environment, combining programming, mathematics, and music

**News & Information:**
- **Paperboy** updated to version 0.8.1a, the GTK4/Libadwaita news reader included for secondary (Middle/High School) and tertiary (College/University) education

### Technical Improvements

- **Leaner minimal and Raspberry Pi images:** memtest86+ is no longer recommended on the minimal and Raspberry Pi desktop seeds
- **Blocklisted KDE System Settings:** KDE's System Settings is blocked from being pulled into the minimal desktop, as it does not belong on a GNOME desktop
- **Refreshed dependencies:** Edubuntu metapackages have been updated for the Stonking Stingray archive

---

## Classroom & Education-Focused Features

Edubuntu 26.10 is built around practical classroom deployment, with software organized by age group and subject area.

### Age-Group Learning Profiles

- **Preschool** and **Primary/Elementary** profiles are available for early and foundational learning environments.
- **Secondary/Middle/High School** and **Tertiary/College/University** profiles are available for advanced coursework and productivity-focused workflows.
- **Flexible per-user configuration:** Edubuntu Installer and Edubuntu Menu Administration allow administrators to apply defaults system-wide or override them for specific users.

### Subject Metapackages (installable via Edubuntu Installer)

- **Age-group metapackages:** `ubuntu-edu-preschool`, `ubuntu-edu-primary`, `ubuntu-edu-secondary`, `ubuntu-edu-tertiary`
- **Teaching metapackage:** `ubuntu-edu-teaching` (includes tools such as qxw, Auto Multiple Choice, and Foliate)
- **Music metapackage:** `ubuntu-edu-music` (includes fmit, gnome-metronome, Minuet, Solfege, Pianobooster, and now Sonic Pi)
- **Fonts metapackage:** `edubuntu-fonts`

### Representative Student Applications

- **Gradebook:** Student grade tracking and management, included in Primary, Secondary, and Tertiary learning profiles
- **Paperboy:** News-reading workflow for media literacy and current-events discussion, included in Secondary and Tertiary learning profiles
- **Foliate:** E-book reading for digital textbooks and course materials, included in Secondary and Tertiary profiles and the Teaching metapackage
- **Sonic Pi:** Code-based music creation, available through the Music metapackage

---

## System Requirements

Edubuntu 26.10 has similar system requirements to Ubuntu Desktop 26.10:

### Minimum Specifications
- **Processor:** 2 GHz dual-core processor or equivalent
- **RAM:** 4 GB minimum (8 GB recommended)
- **Storage:** 30 GB for standard installation, 15 GB for minimal installation
- **Display:** 1024x768 resolution
- **Bootable Media:** USB drive or DVD

### For Raspberry Pi 5
- **Storage:** Minimum 64 GB SD card
- **Bootloader:** EEPROM version 11 FEB 2025 or later (required for boot compatibility)

---

## Upgrading to Edubuntu 26.10

### How to Upgrade

- Upgrades are supported from **Edubuntu 26.04 LTS**. Edubuntu 25.10 reached end of life in July 2026; users still on it should first upgrade to 26.04 LTS.
- Fully update your current system first.
- Because 26.04 is an LTS release, the upgrader only offers LTS releases by default. To be offered 26.10, open `/etc/update-manager/release-upgrades` and set `Prompt=normal`.
- On desktop systems, open Software Updater and follow the prompt when the new release becomes available. Alternatively, run `do-release-upgrade` from a terminal.

As with Ubuntu Desktop, upgrade availability can be staged, so some systems may receive the prompt later than others.

Proceed only after taking a full backup and ensuring you can recover the system if the upgrade fails.

---

## Release Notes & Known Issues

These notes carry forward from the 26.10 Beta announcement; the amd64 mascot issue reported there is fixed in the final release.

### Edubuntu-Specific
- The Ubuntu welcome app branding does not match Edubuntu. [We're working on ways to resolve this](https://launchpad.net/bugs/2060817).

### General Notes
- As Edubuntu is based on Ubuntu Desktop, known issues can be found in the official [Ubuntu 26.10 Release Notes](https://documentation.ubuntu.com/release-notes/26.10/)
- Individual applications included with Edubuntu may have their own known issues. Please consult upstream release notes for those applications before filing bug reports

---

## Support Scope

Our support covers:
- Educational and instructional packages we include
- Edubuntu-specific utilities (Edubuntu Installer, Edubuntu Menu)
- GNOME Shell extensions we provide (Alphabetical App Grid)

The GNOME desktop environment is maintained by the Ubuntu Desktop team. Most applications come from Debian and are maintained upstream. Bug reports should be filed through standard Ubuntu channels.

---

## How to Contact or Participate

### Community Forums & Discussion
- [Ubuntu Discourse - Edubuntu Community](https://discourse.ubuntu.com/c/flavors/edubuntu/)
- [Ubuntu Discourse - Support and Help](https://discourse.ubuntu.com/c/support-and-help/)

### Chat
- [Matrix Chat - #edubuntu:ubuntu.com](https://matrix.to/#/#edubuntu:ubuntu.com)

### Social Media
- [Twitter/X (@edubuntuproject)](https://twitter.com/edubuntuproject)
- [Mastodon (@edubuntu@ubuntu.social)](https://ubuntu.social/@edubuntu)

---

## Support Our Project

### Edubuntu Merchandise
We have an official merchandise shop to support ongoing development. Browse and purchase t-shirts, coffee mugs, hats, teddy bears, and more at [edubuntu.myspreadshop.com](https://edubuntu.myspreadshop.com/). Commissions from merchandise sales directly support the project.

---

## Special Thanks

Huge thanks for this release go to:

- **Joshua Peisach:** Collegiate/tertiary application selection advisor
- **Aaron Prisk:** Website and ongoing maintenance
- **Jeremy Bicha:** GNOME Desktop guidance and application suggestions
- **Oliver Grawert:** Project founder and continued encouragement
- **Jonny Eickmeyer:** Testing and application selection advisor
- **Erich Eickmeyer:** Technical leadership and merchandise store management
- **Amy Eickmeyer:** Project leadership and vision
