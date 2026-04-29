---
title: Edubuntu 26.04 LTS Released
date: 2026-04-23
summary: Edubuntu 26.04 LTS "Resolute Raccoon" is released.
---

![Edubuntu Banner consisting of graduates thowing caps in an arc](images/edubuntu-2604-banner.png)

# Edubuntu 26.04 LTS Released: "Resolute Raccoon"

We are pleased to announce the release of **Edubuntu 26.04 LTS**, codenamed "Resolute Raccoon." This Long-Term Support release provides stability and reliability for educational institutions and learning environments worldwide, with **3 years of support until April 2029**.

Edubuntu 26.04 LTS represents the culmination of development across our 24.04 LTS, 24.10, 25.04, and 25.10 releases. Each interim release brought incremental improvements and community feedback that shaped this stable LTS foundation. With comprehensive tooling for education across all age groups, this release is designed to serve schools, educators, and learners seeking accessible, high-quality free software.

---

## Technical Release Information

| | |
|---|---|
| **Release Date** | April 2026 |
| **Codename** | Resolute Raccoon |
| **Support Period** | 3 years (until April 2029) |
| **Architectures** | amd64/Intel, Raspberry Pi 5 (arm64+raspi) |
| **Download** | [cdimages.ubuntu.com/edubuntu/releases/26.04/release](https://cdimages.ubuntu.com/edubuntu/releases/26.04/release) |

---

## Major Enhancements

### Desktop Environment & Technology

- **GNOME 50** brings the latest in modern desktop computing with improved performance and usability
- **New Teal Accent Color** (Yaru-prussiangreen): A refreshed visual identity matching our new education-themed wallpapers
- **Updated Plymouth Spinner:** Consistent boot experience with Ubuntu Desktop

### Edubuntu Installer & Administration Tools

The Edubuntu Installer and Menu Administration tools have been completely **rewritten from the ground up in Python**, replacing the previous shell-based implementation. This brings significant improvements:

- **Dual UI Backends:** Automatically detects your desktop environment and launches the appropriate interface (GTK4 or Qt6)
- **Cockpit Integration:** Web-based remote administration module for configuring age-group settings across your network
- **Default and per-user setup control:** Administrators can apply age-group defaults system-wide or override them for individual non-administrator users
- **Multilingual Support:** Now available in 21 languages including Arabic, Chinese (Simplified), Czech, Estonian, French, German, Hindi, Italian, Japanese, Korean, Latvian, Lithuanian, Dutch, Polish, Portuguese, Brazilian Portuguese, Russian, Slovak, Spanish, Turkish, and Ukrainian (including full installer slideshow localization)
- **Enhanced Menu Administration:** Ability to disable terminal keyboard shortcuts for non-admin users, providing better control in classroom environments
- **Application-menu controls:** Menu Administration can hide Ptyxis by default for non-admin users and keeps per-user application lists aligned with the global application list
- **Improved account handling:** Non-user/system accounts are filtered out so only real student and staff accounts appear in the administrative interface
- **Improved UI Polish:** Refined GTK and Qt layouts, improved spacing, and launch fixes for better day-to-day usability

### Applications & Content Tools

**Email & Communication:**
- **Thunderbird** replaces Geary as the default email, calendar, and contacts suite, providing better compatibility with Microsoft 365 accounts (widely used in educational institutions)

**Media & Entertainment:**
- **GNOME Showtime** replaces Totem as the default video player, offering improved codec support and interface consistency
- **Rhythmbox** replaces GNOME Music (which ceased upstream development), providing a reliable music library manager for educational content
- **Foliate:** Modern GTK4 e-book reader for digital learning materials, supporting EPUB and PDF formats for classroom-distributed content

**News & Information:**
- **Paperboy:** GTK4/Libadwaita news reader application, included for secondary (Middle/High School) and tertiary (College/University) education. Provides structured access to educational news and current events for classroom discussion

**STEM & Professional Tools:**
- **Arduino IDE:** Included for secondary and tertiary students learning embedded systems and robotics
- **Raspberry Pi Imager:** Included for those working with Raspberry Pi projects
- **GChemPaint:** 2D chemical structure editor for secondary and tertiary chemistry education

**Productivity & Note-Taking:**
- **GNOME Notes (Bijiben)** as the default note-taking application, replacing Gnote for better integration with GNOME desktop features and more active upstream development

**Extensions & Customization:**
- **Alphabetical App Grid GNOME Shell Extension** updated to version 44.0 with full support for GNOME 50

### Technical Improvements

- **Removed GTK 2 Support:** Several GTK 2 packages have been removed (including chemtool), as GTK 2 is no longer supported in upstream Debian, improving system cleanliness and security
- **Artha Removal:** The offline thesaurus (Artha) has been removed as it is no longer maintained upstream; we encourage online reference sources like Wiktionary for classroom use


---

## Classroom & Education-Focused Features

Edubuntu 26.04 LTS is built around practical classroom deployment, with software organized by age group and subject area.

### Age-Group Learning Profiles

- **Preschool** and **Primary/Elementary** profiles are available for early and foundational learning environments.
- **Secondary/Middle/High School** and **Tertiary/College/University** profiles are available for advanced coursework and productivity-focused workflows.
- **Flexible per-user configuration:** Edubuntu Installer and Edubuntu Menu Administration allow administrators to apply defaults system-wide or override them for specific users.

### Subject Metapackages (installable via Edubuntu Installer)

- **Age-group metapackages:** `ubuntu-edu-preschool`, `ubuntu-edu-primary`, `ubuntu-edu-secondary`, `ubuntu-edu-tertiary`
- **Teaching metapackage:** `ubuntu-edu-teaching` (includes tools such as qxw and Auto Multiple Choice)
- **Music metapackage:** `ubuntu-edu-music` (includes fmit, gnome-metronome, Minuet, Solfege, and Pianobooster)
- **Fonts metapackage:** `edubuntu-fonts`

### Representative Student Applications

- **Gradebook:** Student grade tracking and management (introduced in 24.04 LTS), included in Primary, Secondary, and Tertiary learning profiles
- **Paperboy:** News-reading workflow for media literacy and current-events discussion, included in Secondary and Tertiary learning profiles
- **Foliate:** E-book reading for digital textbooks and course materials, included in Secondary and Tertiary profiles and the Teaching metapackage

---

## System Requirements

Edubuntu 26.04 LTS has similar system requirements to Ubuntu Desktop 26.04 LTS:

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

## Upgrading to Edubuntu 26.04 LTS

### How to Upgrade

- From a supported existing Edubuntu release, fully update your current system first.
- On desktop systems, open Software Updater and follow the prompt when the new release becomes available.
- If you do not see an upgrade prompt yet, your upgrade path may not be enabled for your release channel yet.

### When Upgrades Are Enabled

- **From interim releases (such as 25.10):** Upgrades to 26.04 LTS are typically enabled shortly after release, once initial stability checks are complete.
- **From 24.04 LTS:** LTS-to-LTS upgrades are typically enabled after the first point release (**26.04.1**).

As with Ubuntu Desktop, upgrade availability can be staged, so some systems may receive the prompt later than others.

### Early Upgrade (Unsupported)

Some users may prefer to upgrade before the official upgrade path is enabled.

This is **not supported** by the Edubuntu project and is intended only for experienced users who can troubleshoot issues on their own. Early upgrades may result in package conflicts, incomplete transitions, or a system that cannot be supported by the project team.

If you still choose to proceed, launch the release upgrader in development mode:

```bash
update-manager -d
```

Proceed only after taking a full backup and ensuring you can recover the system if the upgrade fails.

---

## Known Issues

### Edubuntu-Specific
- The Ubuntu welcome app branding does not match Edubuntu. We're working on ways to resolve this issue.

### Raspberry Pi 5
- Requires a newer EEPROM/bootloader version (11 FEB 2025 or later) to boot this release. Earlier versions will be unable to boot, and upgrades will be blocked for safety.

### General Notes
- As Edubuntu is based on Ubuntu Desktop, known issues can be found in the official [Ubuntu 26.04 LTS Release Notes](https://documentation.ubuntu.com/release-notes/26.04/)
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

- **Aaron Prisk:** Website and ongoing maintenance
- **Jeremy Bicha:** GNOME Desktop guidance and application suggestions
- **Oliver Grawert:** Project founder and continued encouragement
- **Jonny Eickmeyer:** Testing and application selection advisor
- **Erich Eickmeyer:** Technical leadership and merchandise store management
- **Amy Eickmeyer:** Project leadership and vision
