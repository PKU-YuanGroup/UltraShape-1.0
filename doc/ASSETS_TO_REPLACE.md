# UltraShape 1.0 素材替换清单

以下素材需要替换为 UltraShape 1.0 相关的内容：

## 📹 视频文件

1. **bg.mp4** - Hero 区域背景视频
   - 位置：`index.html` 第 78 行
   - 说明：首页顶部背景循环视频，建议使用 UltraShape 1.0 生成的 3D 模型展示视频
   - 当前：TRELLIS.2 的背景视频

2. **trellis2.mp4** - 主要介绍视频
   - 位置：`index.html` 第 104 行
   - 说明：主要功能展示视频，需要替换为 UltraShape 1.0 的介绍视频
   - 当前：TRELLIS.2 的介绍视频

3. **cover.webp** - 视频封面图
   - 位置：`index.html` 第 108 行
   - 说明：视频播放前的封面图片
   - 当前：TRELLIS.2 的封面图

4. **ee8ecf658fde9c58830c021b2e30d0d5e7e492ef52febe7192a6c74fbf1b0472.mp4** - 示例生成视频
   - 位置：`index.html` 第 651 行
   - 说明：展示生成结果的示例视频
   - 当前：TRELLIS.2 的示例

5. **jet_engine_turbine.mp4** - 重建示例视频
   - 位置：`index.html` 第 666 行
   - 说明：3D 资产重建示例视频
   - 当前：TRELLIS.2 的示例

## 🖼️ 图片文件

6. **fidelity_comparison.png** - 保真度对比图
   - 位置：`index.html` 第 184 行
   - 说明：重建准确度 vs 潜在压缩度的对比图
   - 当前：TRELLIS.2 的对比图

7. **overview.jpg** - Pipeline 概览图
   - 位置：`index.html` 第 675 行
   - 说明：技术流程概览图，应展示 UltraShape 1.0 的 pipeline（与您提供的 pipeline 图一致）
   - 当前：TRELLIS.2 的概览图

8. **ovoxel.png** - O-Voxel 示意图
   - 位置：`index.html` 第 693 行
   - 说明：O-Voxel 表示的示意图
   - 当前：TRELLIS.2 的图

9. **scvae.png** - SC-VAE 架构图
   - 位置：`index.html` 第 758 行
   - 说明：Sparse Compression VAE 的架构图
   - 当前：TRELLIS.2 的图

10. **relighting.webp** - 重光照示例图
    - 位置：`index.html` 第 619 行
    - 说明：展示纹理和重光照效果的图片
    - 当前：TRELLIS.2 的示例

11. **ee8ecf658fde9c58830c021b2e30d0d5e7e492ef52febe7192a6c74fbf1b0472.webp** - 输入提示图片
    - 位置：`index.html` 第 655 行
    - 说明：示例的输入图片
    - 当前：TRELLIS.2 的示例

12. **favicon.png** - 网站图标
    - 位置：`index.html` 第 59 行
    - 说明：浏览器标签页图标
    - 当前：TRELLIS.2 的图标

## 📝 其他需要更新的内容

13. **网站标题和品牌名称**
    - 位置：`index.html` 第 58 行（title）、第 82 行（Hero 标题）、第 677 行（文本）
    - 说明：将所有 "TRELLIS.2" 替换为 "UltraShape 1.0"

14. **链接地址**
    - 位置：`index.html` 第 89-91 行
    - 说明：论文、代码、Demo 的链接需要更新为 UltraShape 1.0 的实际链接

15. **描述文本**
    - 位置：`index.html` 第 98 行及其他相关位置
    - 说明：根据 UltraShape 1.0 的实际参数和特性更新描述

16. **引用信息**
    - 位置：`index.html` 第 879-899 行
    - 说明：更新 BibTeX 引用信息

## 📁 目录结构（如果存在）

- `assets/feature/topology.glb` - 3D 模型文件（如果存在）
- `assets/env_maps/gradient.jpg` - 环境贴图（如果存在）

---

**替换步骤：**
1. 准备新的素材文件
2. 将文件放置在相同的目录位置
3. 使用相同的文件名，或更新 `index.html` 中对应的路径
4. 确保文件格式和尺寸与现有设计匹配

