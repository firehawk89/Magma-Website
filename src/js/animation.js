/* THREE JS ANIMATION */
window.addEventListener("load", init, false);
function init() {
  createWorld();
  createPrimitive();
  animation();
}

var Theme = {
  primary: 0xffffff,
  secundary: 0x292733,
  danger: 0xff0000,
  darker: 0x000000,
};

//--------------------------------------------------------------------
var scene, camera, renderer, container;
var _width, _height;
var _primitive;
var shapeGroup = new THREE.Group();
var start = Date.now();

function createWorld() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  //---
  scene = new THREE.Scene();
  scene.background = new THREE.Color(Theme.secundary);
  //---
  camera = new THREE.PerspectiveCamera(35, _width / _height, 1, 1000);
  camera.position.set(0, 0, 16);
  //---
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });

  renderer.setSize(_width, _height);
  //renderer.setSize(_width, (4 * _width) / 6);
  renderer.shadowMap.enabled = false;
  //---
  const heroBackground = document.querySelector(".hero__background");
  heroBackground.appendChild(renderer.domElement);
  //---
  window.addEventListener("resize", onWindowResize, false);
}
function onWindowResize() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  renderer.setSize(_width, _height);
  camera.aspect = _width / _height;
  camera.updateProjectionMatrix();
}
//--------------------------------------------------------------------
var primitiveElement = function () {
  this.mesh = new THREE.Object3D();
  mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      time: {
        type: "f",
        value: 0.1,
      },
      pointscale: {
        type: "f",
        value: 0.2,
      },
      decay: {
        type: "f",
        value: 0.3,
      },
      size: {
        type: "f",
        value: 0.3,
      },
      displace: {
        type: "f",
        value: 0.3,
      },
      complex: {
        type: "f",
        value: 0.0,
      },
      waves: {
        type: "f",
        value: 0.1,
      },
      eqcolor: {
        type: "f",
        value: 0.0,
      },
      rcolor: {
        type: "f",
        value: 0.0,
      },
      gcolor: {
        type: "f",
        value: 0.0,
      },
      bcolor: {
        type: "f",
        value: 0.0,
      },
      fragment: {
        type: "i",
        value: true,
      },
      redhell: {
        type: "i",
        value: true,
      },
    },
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
  });
  //---
  //var wir_mat = new THREE.MeshBasicMaterial({ color: Theme.darker });
  var geo = new THREE.IcosahedronBufferGeometry(2, 6);
  var wir = new THREE.IcosahedronBufferGeometry(2.3, 2);
  this.shape = new THREE.Mesh(geo, mat);
  this.point = new THREE.Points(wir, mat);
  //---
  shapeGroup.add(this.point);
  shapeGroup.add(this.shape);
};
function createPrimitive() {
  _primitive = new primitiveElement();
  scene.add(shapeGroup);
}

var options = {
  perlin: {
    speed: 0.18,
    size: 0.1,
    perlins: 1.0,
    decay: 1.2,
    displace: 0.3,
    complex: 1.0,
    waves: 0.6,
    eqcolor: 17.0,
    rcolor: 1.0,
    gcolor: 0.1,
    bcolor: 0.3,
    fragment: true,
    points: false,
    redhell: false,
  },
};

//--------------------------------------------------------------------
function animation() {
  var performance = Date.now() * 0.003;
  //---
  //_primitive.shape.visible = !options.perlin.points;
  _primitive.point.visible = options.perlin.points;
  //---
  mat.uniforms["time"].value =
    (options.perlin.speed / 1000) * (Date.now() - start);

  mat.uniforms["pointscale"].value = options.perlin.perlins;
  mat.uniforms["decay"].value = options.perlin.decay;
  mat.uniforms["size"].value = options.perlin.size;
  mat.uniforms["displace"].value = options.perlin.displace;
  mat.uniforms["complex"].value = options.perlin.complex;
  mat.uniforms["waves"].value = options.perlin.waves;
  mat.uniforms["fragment"].value = options.perlin.fragment;

  mat.uniforms["redhell"].value = options.perlin.redhell;
  mat.uniforms["eqcolor"].value = options.perlin.eqcolor;
  mat.uniforms["rcolor"].value = options.perlin.rcolor;
  mat.uniforms["gcolor"].value = options.perlin.gcolor;
  mat.uniforms["bcolor"].value = options.perlin.bcolor;
  //---
  requestAnimationFrame(animation);
  renderer.render(scene, camera);
}
