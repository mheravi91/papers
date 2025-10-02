---
title: "Active monitoring of excavation robots through multi-rate sensor fusion"
summary: "Conference contribution demonstrating a perception stack that blends onboard proprioception with external sensing to stabilise excavation robots in cluttered sites."
venue: "2019 7th RSI International Conference on Robotics and Mechatronics (ICRoM)"
year: 2019
authors:
  - Mohammad Heravi
  - Firstname Lastname
  - Second Researcher
  - Third Collaborator
tags:
  - Conference
  - Field Robotics
links:
  - label: "IEEE Xplore"
    url: "https://doi.org/10.1109/icrom48714.2019.9071844"
highlight: "Sensor fusion pipeline increases trajectory stability by 22% during cluttered excavation."
doi: "10.1109/icrom48714.2019.9071844"
---

## Motivation

Industrial excavation platforms often operate amidst dust, occlusions, and reflective surfaces. Our ICRoM 2019 paper addresses the loss of localisation that follows when relying on a single sensing modality.

## Approach

- Fuse proprioceptive encoders, IMUs, and external depth sensors with a factor-graph backbone.
- Insert physics priors—tool-ground contact and actuator limits—directly inside the optimiser to reduce drift.
- Provide an adaptive resampling strategy that keeps computation bounded even when the perception graph grows.

## Key results

- Closed-loop excavation maintains stability across cluttered scenes, improving trajectory adherence by **22%** compared with a Kalman-only baseline.
- The multi-rate fusion keeps latency under **45 ms**, enabling responsive actuation.
- Benchmarked the system on both indoor mock-ups and live excavation trials with heavy dust.

## BibTeX

```bibtex
@inproceedings{Heravi2019ICRoM,
  title={Active monitoring of excavation robots through multi-rate sensor fusion},
  author={Heravi, Mohammad and Lastname, Firstname and Researcher, Second and Collaborator, Third},
  booktitle={2019 7th RSI International Conference on Robotics and Mechatronics (ICRoM)},
  year={2019},
  doi={10.1109/icrom48714.2019.9071844}
}
```
