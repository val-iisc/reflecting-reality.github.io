[comment]: <> (# Reflecting Reality: Enabling Diffusion Models to Produce Faithful Mirror Reflections)

<!-- PROJECT LOGO -->

<p align="center">

  <h1 align="center">Reflecting Reality: Enabling Diffusion Models to Produce Faithful Mirror Reflections</h1>

  <p align="center">
    <a href="https://www.linkedin.com/in/ankit-dhiman-46109a174/" target="_blank"><strong>Ankit Dhiman</strong></a> <sup>1,2<b>*</b></sup>
    ·
    <a href="https://cs-mshah.github.io/" target="_blank"><strong>Manan Shah</strong></a> <sup>1<b>*</b></sup>
    ·
    <a href="https://rishubhpar.github.io/" target="_blank"><strong>Rishubh Parihar</strong></a> <sup>1</sup>
    ·
    <a href="https://yashbhalgat.github.io/" target="_blank"><strong>Yash Bhalgat</strong></a> <sup>3</sup>
    ·
    <strong>Lokesh R Boregowda</strong>
    ·
    <a href="https://cds.iisc.ac.in/faculty/venky/" target="_blank"><strong>R Venkatesh Babu</strong></a> <sup>1</sup>
</p>
<p align="center" style="padding-top: 0px;">
    <sup><b>*</b></sup> Equal Contribution
    <br>
    <sup>1</sup> Vision and AI Lab, IISc Bangalore
    <br>
    <sup>2</sup> Samsung R & D Institute India - Bangalore
    <br>
    <sup>3</sup> Visual Geometry Group, University of Oxford
    <br>
</p>

[comment]: <> (  <h2 align="center">PAPER</h2>)
  <h3 align="center">
    <a href="https://arxiv.org/abs/2409.14677">Paper</a> | 
    <a href="https://val.cds.iisc.ac.in/reflecting-reality.github.io/">Project Page</a></h3>
  <div align="center"></div>

<p align="center">
  <a href="">
    <!-- <img src="./scripts/teaser.png" alt="Teaser" width="80%"> -->
  </a>
</p>

## Summary


We tackle the challenge of generating realistic mirror reflections using diffusion-based generative models, formulated as an image inpainting task to enable user control over mirror placement. To support this, we introduce **SynMirror**, a dataset with $198K$ samples rendered from $66K$ 3D objects, including depth maps, normal maps, and segmentation masks to capture scene geometry. 

We propose **MirrorFusion**, a novel depth-conditioned inpainting method that produces high-quality, photo-realistic reflections, given an input image and mirror mask. **MirrorFusion** outperforms state-of-the-art methods on **SynMirror**, offering new possibilities for image editing and augmented reality.
