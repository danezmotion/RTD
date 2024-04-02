+++
title = "The CopyCat Node"
description = "Rotoscoping made easy"
date = "2022-12-01"
draft = true
+++

The CopyCat node in Nuke is a utility node that copies the input image to the output, with optional transformations such as scaling, translation, and rotation. It is a very simple node that can be used to duplicate and transform the input image.

The CopyCat node has the following main properties:

Input: This is the image that will be copied and transformed.
Output: This is the output image that is the result of the copy and transformation operations.
Transform: This section contains the controls for scaling, translation, and rotation of the input image. You can adjust the scale, position, and rotation of the input image using these controls.
Mirror: This section contains controls for mirroring the input image along the x and y axes.
Crop: This section contains controls for cropping the input image, allowing you to adjust the size and position of the output image.
You can use the CopyCat node to quickly create multiple copies of an image with different transformations, such as scaling, translation, or rotation. You can also use it to crop an image or mirror it.

It is also possible to use the copycat node as a reference for other nodes in the scene, for example, using the copycat as input for a merge node and then connect other nodes to the merge node creating a way to reference the copycat output in a different part of the node tree, this is useful when working with complex comps.

It's important to note that the copycat only copies the image and doesn't affect the alpha channel, so if you need to make a copy of the alpha channel, you should use another node such as the grade node and connect it to the alpha channel of the copycat.
