module.exports = `<!DOCTYPE html>
<script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
<!-- include aframe-ar.js -->
<script src="./aframe-ar.js"></script>

<body style='margin : 0px; overflow: hidden; font-family: Monospace;'>
	<button id="shuffler" style="z-index: 100; position: fixed; top: 10px; left: 10px">Shuffle</button>
	<button id="toggleGame" style="z-index: 100; position: fixed; top: 10px; left: 80px">Toggle Game</button>
	<a-scene embedded arjs='sourceType: webcam; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
		<a-assets id="image-assets">
			<img id="black" src="black.jpeg">
			<img id="blue" src="blue.jpeg">
			<img id="green" src="green.jpeg">
			<img id="red" src="red.jpeg">
		</a-assets>

		<!-- handle matrix marker -->
		<a-marker type='barcode' value='8'>
			<a-image class="cardImage" src="#darth" />
		</a-marker>

		<a-marker type='barcode' value='9'>
			<a-image class="cardImage" src="#luke" />
		</a-marker>
		
		<a-marker type='barcode' value='10'>
			<a-image class="cardImage" src="#han" />
		</a-marker>

		<a-marker type='barcode' value='11'>
			<a-image class="cardImage" src="#trooper" />
		</a-marker>

		<!-- add a simple camera -->
		<a-entity camera></a-entity>
	</a-scene>
	<script>
		var callback = function(){
			const imageNames = ['luke', 'darth', 'han', 'trooper']
			var assetsContainer = document.querySelector('#image-assets');
			imageNames.forEach(function(name) {
				var ele = document.createElement('img');
				ele.setAttribute('id', name);
				ele.setAttribute('src', name + '.jpg');
				assetsContainer.append(ele);
			})

			var els = document.querySelectorAll('.cardImage');
			els.forEach(function(e) {
				e.setAttribute('position', "0.6 0 1.1");
				e.setAttribute('width', "2.5");
				e.setAttribute('height', "3.5");
				e.setAttribute('rotation', "270 0 0");
			});
		};

		if (
			    document.readyState === "complete" ||
			    (document.readyState !== "loading" && !document.documentElement.doScroll)
		) {
			  callback();
		} else {
			  document.addEventListener("DOMContentLoaded", callback);
		}
		document.addEventListener('click', function(event) {
			if (event.target.matches('#shuffler')) {
				var els = document.querySelectorAll('.cardImage');
				var sources = Array.from(els).map(function(e) { return e.attributes.src.nodeValue })
				var finalIndex = sources.length - 1

				for(var i = finalIndex; i > 0; i--){
					  const j = Math.floor(Math.random() * i)
					  const temp = sources[i]
					  sources[i] = sources[j]
					  sources[j] = temp
				}
				els.forEach(function(e, i) { e.setAttribute('src', sources[i]) })
			}
			if (event.target.matches('#toggleGame')) {
				var prevGame = window.selectedGame || 'destiny'
				window.selectedGame = prevGame === 'destiny' ? 'magic' : 'destiny';
				var magicCards = ['black', 'blue', 'green', 'red']
				var destinyCards = ['darth', 'luke', 'han', 'trooper']
				var els = document.querySelectorAll('.cardImage');
				var currentSet = window.selectedGame === 'magic' ? magicCards : destinyCards;
				els.forEach(function(e, i) { e.setAttribute('src', "#" + currentSet[i]) })
			}
		}, false);
	</script>
</body>

</html>`
