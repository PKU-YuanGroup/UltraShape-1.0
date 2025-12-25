<div align="center">

<h1>UltraShape 1.0: High-Fidelity 3D Shape Generation via Scalable Geometric Refinement</h1>

<a href="https://arxiv.org/pdf/2512.21185"><img src="https://img.shields.io/badge/arXiv-2512.21185-b31b1b.svg?style=flat-square" alt="arXiv"></a>
<a href="https://pku-yuangroup.github.io/UltraShape-1.0/"><img src="https://img.shields.io/badge/Project-Page-blue?style=flat-square" alt="Project Page"></a>
<!-- <a href="https://huggingface.co/"><img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Models-yellow?style=flat-square" alt="HuggingFace Models"></a> -->
<!-- <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square" alt="License"></a> -->

</div>

<br/>

<div align="center">
  <img src="asset/images/teaser.png" width="100%" alt="UltraShape 1.0 Teaser" />
</div>

<br/>

## 📖 Abstract

In this report, we introduce **UltraShape 1.0**, a scalable 3D diffusion framework for high-fidelity 3D geometry generation. The proposed approach adopts a **two-stage generation pipeline**: a coarse global structure is first synthesized and then refined to produce detailed, high-quality geometry.

To support reliable 3D generation, we develop a comprehensive data processing pipeline that includes a novel **watertight processing method** and **high-quality data filtering**. This pipeline improves the geometric quality of publicly available 3D datasets by removing low-quality samples, filling holes, and thickening thin structures, while preserving fine-grained geometric details. 

To enable fine-grained geometry refinement, we decouple spatial localization from geometric detail synthesis in the diffusion process. We achieve this by performing **voxel-based refinement** at fixed spatial locations, where voxel queries derived from coarse geometry provide explicit positional anchors encoded via **RoPE**, allowing the diffusion model to focus on synthesizing local geometric details within a reduced, structured solution space.

Extensive evaluations demonstrate that UltraShape 1.0 performs competitively with existing open-source methods in both data processing quality and geometry generation.

## 🔥 News
* **[2025-12-25]** 📄 We released the technical report of **UltraShape 1.0** on arXiv.
* **[Coming Soon]** 🚀 Training code and pre-trained models will be released soon. Stay tuned!

## 🗓️ To-Do List
- [ ] Release inference code
- [ ] Release pre-trained weights (Hugging Face)
- [ ] Release training code
- [ ] Release data processing scripts

## 🔗 BibTeX

If you found this repository helpful, please cite our reports:

```bibtex
@article{jia2025ultrashape,
    title={UltraShape 1.0: High-Fidelity 3D Shape Generation via Scalable Geometric Refinement},
    author={Jia, Tanghui and Yan, Dongyu and Hao, Dehao and Li, Yang and Zhang, Kaiyi and He, Xianyi and Li, Lanjiong and Chen, Jinnan and Jiang, Lutao and Yin, Qishen and Quan, Long and Chen, Ying-Cong and Yuan, Li},
    journal={arxiv preprint arXiv:2512.21185},
    year={2025}
}
```

## Acknowledgements

Our code is built upon the excellent work of [Hunyuan3D-2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1). The core idea of our method is greatly inspired by [LATTICE](https://arxiv.org/abs/2512.03052). We deeply appreciate the contributions of these works to the 3D generation community. Please also consider citing **Hunyuan3D 2.1** and **LATTICE**:

- **[Hunyuan3D-2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1)**
- **[Lattice3D](https://lattice3d.github.io/)**
