(() => {
  // src/pet/art.js
  var ART = (
    /* html */
    `
<svg class="wm-art" viewBox="0 0 240 320" role="img" aria-label="\u9CB8\u9C7C\u5A18\u5C0F\u6C50">
  <defs>
    <linearGradient id="wmHair" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="#526bd6"/>
      <stop offset="0.45" stop-color="#31428f"/>
      <stop offset="1" stop-color="#1b275f"/>
    </linearGradient>
    <linearGradient id="wmHairLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a4b9ff"/>
      <stop offset="1" stop-color="#5c78e6"/>
    </linearGradient>
    <linearGradient id="wmSkin" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0" stop-color="#fff3eb"/>
      <stop offset="0.7" stop-color="#ffe1d5"/>
      <stop offset="1" stop-color="#ffd2c4"/>
    </linearGradient>
    <linearGradient id="wmIris" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b8fbff"/>
      <stop offset="0.35" stop-color="#54dcf1"/>
      <stop offset="0.72" stop-color="#2f8ee0"/>
      <stop offset="1" stop-color="#1b3f9d"/>
    </linearGradient>
    <linearGradient id="wmFin" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0" stop-color="#a9fbff"/>
      <stop offset="0.5" stop-color="#4dd5e8"/>
      <stop offset="1" stop-color="#1b7fae"/>
    </linearGradient>
    <linearGradient id="wmTail" x1="0" y1="0" x2="1" y2="0.7">
      <stop offset="0" stop-color="#4159b4"/>
      <stop offset="0.6" stop-color="#26377e"/>
      <stop offset="1" stop-color="#141e4b"/>
    </linearGradient>
    <linearGradient id="wmDress" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0" stop-color="#3a4b8c"/>
      <stop offset="1" stop-color="#18234f"/>
    </linearGradient>
    <linearGradient id="wmWhite" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#dbe8ff"/>
    </linearGradient>
    <radialGradient id="wmBlush" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ff9aa6" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#ff9aa6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- ground shadow -->
  <ellipse class="wm-ground" cx="120" cy="303" rx="55" ry="9" fill="#243a72" opacity="0.16"/>

  <!-- \u2550\u2550 \u5C3E\u5DF4 / tail \u2550\u2550 -->
  <g class="wm-layer wm-layer-tail" data-part="tail">
    <g id="wmTail">
      <path d="M144 258 C167 258 188 246 197 228 C201 220 204 215 209 211 L216 220 C206 235 197 250 183 260 C171 269 156 272 146 270 Z"
        fill="url(#wmTail)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M207 211 C213 197 223 186 234 182 C241 180 244 186 241 194 C237 203 227 209 216 212 C225 215 233 222 236 230 C238 238 232 243 226 239 C217 233 210 223 207 211 Z"
        fill="url(#wmTail)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M158 258 C180 253 194 241 201 226" fill="none" stroke="#8fa9ff" stroke-width="1.6" opacity="0.68"/>
      <path d="M213 209 C221 198 229 191 236 188 M214 214 C222 218 228 224 231 231"
        fill="none" stroke="#8fb2ff" stroke-width="1.1" opacity="0.55" stroke-linecap="round"/>
    </g>
  </g>

  <!-- \u2550\u2550 \u540E\u53D1 / back hair \u2550\u2550 -->
  <g class="wm-layer wm-layer-hair" data-part="hair">
    <g id="wmHairBack">
      <path d="M120 62 C85 62 62 88 60 126 C58 160 51 214 44 252 C40 271 50 283 62 275 C74 267 79 242 83 216 L86 266 C88 283 102 289 112 275 C118 265 120 246 121 226 L119 226 C120 246 122 265 128 275 C138 289 152 283 154 266 L157 216 C161 242 166 267 178 275 C190 283 200 271 196 252 C189 214 182 160 180 126 C178 88 155 62 120 62 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M70 128 C64 172 57 226 50 258" fill="none" stroke="#6d86ea" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
      <path d="M170 128 C176 172 183 226 190 258" fill="none" stroke="#6d86ea" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
      <path d="M60 258 C67 262 74 258 78 249" fill="none" stroke="#9db3ff" stroke-width="1.4" opacity="0.4" stroke-linecap="round"/>
      <path d="M180 258 C173 262 166 258 162 249" fill="none" stroke="#9db3ff" stroke-width="1.4" opacity="0.4" stroke-linecap="round"/>
    </g>
  </g>

  <!-- \u2550\u2550 \u8EAB\u4F53 / body \u2550\u2550 -->
  <g class="wm-layer wm-layer-body" data-part="body">
    <g id="wmBody">
      <!-- torso -->
      <path d="M93 198 C103 191 137 191 147 198 L153 241 C153 252 141 258 120 258 C99 258 87 252 87 241 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>

      <!-- sailor collar -->
      <path d="M92 198 C101 206 110 210 120 210 C130 210 139 206 148 198 L158 213 L120 244 L82 213 Z"
        fill="url(#wmDress)" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M88 213 L120 241 L152 213" fill="none" stroke="#8ceef7" stroke-width="2" opacity="0.9"/>

      <!-- neckerchief -->
      <path d="M120 230 C112 219 99 224 101 234 C103 243 113 244 120 238 C127 244 137 243 139 234 C141 224 128 219 120 230 Z"
        fill="#57dcec" stroke="#167a9d" stroke-width="0.9"/>
      <circle cx="120" cy="233" r="4.2" fill="#b6fbff" stroke="#167a9d" stroke-width="0.9"/>

      <!-- skirt -->
      <path d="M95 250 L145 250 L158 287 C142 296 98 296 82 287 Z"
        fill="url(#wmDress)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M104 253 L97 289 M114 253 L110 292 M126 253 L130 292 M136 253 L143 289"
        fill="none" stroke="#6d84d8" stroke-width="1" opacity="0.75"/>
      <path d="M85 285 C104 292 136 292 155 285" fill="none" stroke="#7ceaf6" stroke-width="2" opacity="0.9"/>

      <!-- legs -->
      <rect x="102" y="286" width="15" height="23" rx="7.5" fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.1"/>
      <rect x="123" y="286" width="15" height="23" rx="7.5" fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.1"/>
      <path d="M102 296 L117 296 M123 296 L138 296" stroke="#7ceaf6" stroke-width="1.6"/>

      <!-- shoes -->
      <path d="M99 304 C99 299 107 297 112 300 L117 312 C113 315 103 315 100 312 Z"
        fill="#20305f" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M141 304 C141 299 133 297 128 300 L123 312 C127 315 137 315 140 312 Z"
        fill="#20305f" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M101 309 L113 309 M127 309 L139 309" stroke="#8ceef7" stroke-width="1.2" opacity="0.85"/>
    </g>
  </g>

  <!-- \u2550\u2550 \u624B\u81C2 / arms \u2550\u2550 -->
  <g class="wm-layer wm-layer-armL" data-part="arms">
    <g id="wmArmL">
      <path d="M97 203 C89 210 83 224 81 239 C80 248 85 253 91 251 C97 249 99 241 101 233 L105 211 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="88" cy="247" r="7" fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M84 246 C86 249 90 250 93 248" fill="none" stroke="#e9a89b" stroke-width="0.9" opacity="0.8"/>
    </g>
  </g>

  <g class="wm-layer wm-layer-armR" data-part="arms">
    <g id="wmArmR">
      <path d="M143 203 C151 210 157 224 159 239 C160 248 155 253 149 251 C143 249 141 241 139 233 L135 211 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="152" cy="247" r="7" fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M156 246 C154 249 150 250 147 248" fill="none" stroke="#e9a89b" stroke-width="0.9" opacity="0.8"/>
    </g>
  </g>

  <!-- \u2550\u2550 \u5934\u90E8 / head \u2550\u2550 -->
  <g class="wm-layer wm-layer-head" data-part="head">
    <g id="wmHead">
      <!-- neck (belongs to the head layer so the slice view stays articulated) -->
      <g class="wm-neck">
        <path d="M109 170 L131 170 L133 199 C126 204 114 204 107 199 Z"
          fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
        <path d="M109 177 C116 185 124 185 131 177 L131 191 C124 195 116 195 109 191 Z" fill="#f2b6a8" opacity="0.5"/>
      </g>

      <!-- ears -->
      <path d="M69 126 C60 120 53 130 58 138 C62 144 69 143 73 137 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M171 126 C180 120 187 130 182 138 C178 144 171 143 167 137 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>

      <!-- face -->
      <path d="M120 73 C88 73 64 93 63 125 C62 150 80 173 103 179 C110 181 130 181 137 179 C160 173 178 150 177 125 C176 93 152 73 120 73 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1.1"/>

      <!-- cheek blush -->
      <ellipse cx="82" cy="153" rx="13" ry="6" fill="url(#wmBlush)"/>
      <ellipse cx="158" cy="153" rx="13" ry="6" fill="url(#wmBlush)"/>
      <path d="M77 151 L79 156 M83 150 L85 155 M89 151 L91 156 M153 151 L155 156 M159 150 L161 155 M165 151 L167 156"
        stroke="#ff9aa6" stroke-width="0.8" opacity="0.55" stroke-linecap="round"/>

      <!-- eyebrows -->
      <g class="wm-brows">
        <path d="M85 113 Q97 107 108 112" fill="none" stroke="#3b4779" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M132 112 Q143 107 155 113" fill="none" stroke="#3b4779" stroke-width="2.3" stroke-linecap="round"/>
      </g>
      <g class="wm-brows-focus">
        <path d="M85 110 Q96 112 108 117" fill="none" stroke="#34406e" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M155 110 Q144 112 132 117" fill="none" stroke="#34406e" stroke-width="2.4" stroke-linecap="round"/>
      </g>

      <!-- open eyes -->
      <g class="wm-eyes-open">
        <g class="wm-eye" id="wmEyeL">
          <ellipse cx="97" cy="138" rx="15.5" ry="17" fill="#fffdfd" stroke="#24305e" stroke-width="0.7"/>
          <ellipse cx="97" cy="139.5" rx="11.6" ry="14.4" fill="url(#wmIris)" stroke="#1d326f" stroke-width="0.8"/>
          <ellipse cx="97" cy="141" rx="5.6" ry="8.8" fill="#101b3f"/>
          <ellipse cx="97" cy="146.5" rx="8" ry="4.6" fill="#8bf6ff" opacity="0.5"/>
          <circle cx="93" cy="133" r="4.1" fill="#ffffff"/>
          <circle cx="101" cy="143" r="2" fill="#ffffff" opacity="0.9"/>
          <path d="M83 130 C87 119 96 114 105 117 C111 119 115 125 116 131" fill="none"
            stroke="#18224c" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M114 126 L120 122" stroke="#18224c" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M85 154 Q97 160 109 154" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.45" stroke-linecap="round"/>
        </g>
        <g class="wm-eye" id="wmEyeR">
          <ellipse cx="143" cy="138" rx="15.5" ry="17" fill="#fffdfd" stroke="#24305e" stroke-width="0.7"/>
          <ellipse cx="143" cy="139.5" rx="11.6" ry="14.4" fill="url(#wmIris)" stroke="#1d326f" stroke-width="0.8"/>
          <ellipse cx="143" cy="141" rx="5.6" ry="8.8" fill="#101b3f"/>
          <ellipse cx="143" cy="146.5" rx="8" ry="4.6" fill="#8bf6ff" opacity="0.5"/>
          <circle cx="139" cy="133" r="4.1" fill="#ffffff"/>
          <circle cx="147" cy="143" r="2" fill="#ffffff" opacity="0.9"/>
          <path d="M157 130 C153 119 144 114 135 117 C129 119 125 125 124 131" fill="none"
            stroke="#18224c" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M126 126 L120 122" stroke="#18224c" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M131 154 Q143 160 155 154" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.45" stroke-linecap="round"/>
        </g>
        <g class="wm-pupils">
          <circle cx="97" cy="141" r="5.4" fill="#0d1736"/>
          <circle cx="143" cy="141" r="5.4" fill="#0d1736"/>
          <circle cx="95.4" cy="139.4" r="1.5" fill="#7fefff"/>
          <circle cx="141.4" cy="139.4" r="1.5" fill="#7fefff"/>
        </g>
      </g>

      <!-- closed / happy eyes -->
      <g class="wm-eyes-closed">
        <path d="M82 139 Q97 151 112 139" fill="none" stroke="#2a3660" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M128 139 Q143 151 158 139" fill="none" stroke="#2a3660" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M85 152 Q97 158 109 152" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
        <path d="M131 152 Q143 158 155 152" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
      </g>

      <!-- nose -->
      <path d="M118 153 Q120 155 122 153" fill="none" stroke="#d89a8f" stroke-width="1.1" stroke-linecap="round"/>

      <!-- mouths -->
      <g class="wm-mouth wm-mouth-smile">
        <path d="M113 162 Q120 169 127 162" fill="none" stroke="#b45460" stroke-width="2.1" stroke-linecap="round"/>
      </g>
      <g class="wm-mouth wm-mouth-flat">
        <path d="M113 163 Q120 165 127 163" fill="none" stroke="#b45460" stroke-width="2.1" stroke-linecap="round"/>
      </g>
      <g class="wm-mouth wm-mouth-o">
        <ellipse cx="120" cy="164" rx="4" ry="5" fill="#b45460"/>
        <ellipse cx="120" cy="166" rx="2.4" ry="2" fill="#ff9aa6" opacity="0.7"/>
      </g>
      <g class="wm-mouth wm-mouth-grin">
        <path d="M111 160 Q120 172 129 160 Z" fill="#b45460" stroke="#8e3a49" stroke-width="1" stroke-linejoin="round"/>
        <path d="M114 163 Q120 167 126 163" fill="#ff8fa0"/>
      </g>
      <g class="wm-mouth wm-mouth-sleep">
        <path d="M115 164 Q120 167 125 164" fill="none" stroke="#b45460" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- front hair cap + bangs -->
      <path d="M120 61 C88 61 63 84 61 120 C60 135 63 148 69 158 C71 145 73 132 79 122 C83 116 88 112 94 109 C97 119 103 126 109 130 C108 118 110 108 115 100 C119 111 125 118 132 122 C134 110 138 101 144 94 C146 106 151 115 158 121 C164 127 168 140 170 158 C176 148 179 135 177 120 C175 84 152 61 120 61 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M76 122 C82 136 92 146 104 150 M146 94 C148 110 155 124 165 134" fill="none"
        stroke="#8fa8ff" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
      <path d="M87 104 C92 96 98 91 105 88 M129 88 C136 92 141 99 145 107" fill="none"
        stroke="#b7c6ff" stroke-width="1.3" opacity="0.5" stroke-linecap="round"/>
      <path d="M69 92 C76 80 88 72 102 68 M157 79 C164 85 170 94 173 103" fill="none"
        stroke="#c9d5ff" stroke-width="1.1" opacity="0.35" stroke-linecap="round"/>
      <path d="M120 62 C114 54 113 47 116 42 M124 64 C128 56 135 51 141 50" fill="none"
        stroke="#9fb5ff" stroke-width="1" opacity="0.3" stroke-linecap="round"/>

      <!-- side locks -->
      <path d="M64 114 C58 139 58 163 63 183 C66 193 78 194 83 183 C88 171 86 149 84 132 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M176 114 C182 139 182 163 177 183 C174 193 162 194 157 183 C152 171 154 149 156 132 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M69 136 C67 154 68 170 71 180" fill="none" stroke="#7892f0" stroke-width="1.3" opacity="0.55"/>
      <path d="M171 136 C173 154 172 170 169 180" fill="none" stroke="#7892f0" stroke-width="1.3" opacity="0.55"/>

      <!-- ahoge -->
      <path d="M115 63 C107 49 115 38 128 41 C140 44 142 57 133 61 C128 63 125 58 130 55"
        fill="none" stroke="#151f4b" stroke-width="6.4" stroke-linecap="round"/>
      <path d="M115 63 C107 49 115 38 128 41 C140 44 142 57 133 61 C128 63 125 58 130 55"
        fill="none" stroke="url(#wmHairLight)" stroke-width="4" stroke-linecap="round"/>

      <!-- whale-fin hair ornaments -->
      <g class="wm-finL">
        <path d="M76 103 C58 92 39 99 36 113 C34 124 43 133 55 134 C49 138 51 145 60 146 C72 147 82 137 81 125 C80 116 78 108 76 103 Z"
          fill="url(#wmFin)" stroke="#146184" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M45 111 C54 118 63 128 68 140 M55 106 C62 112 68 122 72 133"
          fill="none" stroke="#d4fdff" stroke-width="1.3" opacity="0.6" stroke-linecap="round"/>
        <circle cx="77" cy="108" r="2.6" fill="#e1feff" stroke="#146184" stroke-width="0.7"/>
      </g>
      <g class="wm-finR">
        <path d="M164 103 C182 92 201 99 204 113 C206 124 197 133 185 134 C191 138 189 145 180 146 C168 147 158 137 159 125 C160 116 162 108 164 103 Z"
          fill="url(#wmFin)" stroke="#146184" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M195 111 C186 118 177 128 172 140 M185 106 C178 112 172 122 168 133"
          fill="none" stroke="#d4fdff" stroke-width="1.3" opacity="0.6" stroke-linecap="round"/>
        <circle cx="163" cy="108" r="2.6" fill="#e1feff" stroke="#146184" stroke-width="0.7"/>
      </g>

      <!-- tiny whale-tail hair clip -->
      <g transform="translate(150 94) rotate(14)">
        <g class="wm-clip">
          <path d="M0 0 C-7 -7 -8 -14 -3 -16 C2 -18 5 -12 5 -7 C5 -12 8 -18 13 -16 C18 -14 16 -7 9 0 Z"
            fill="#7ceef8" stroke="#146184" stroke-width="0.9" stroke-linejoin="round"/>
          <circle cx="5" cy="1.2" r="1.8" fill="#e9feff" stroke="#146184" stroke-width="0.7"/>
        </g>
      </g>
    </g>
  </g>

  <!-- \u2550\u2550 \u5C0F\u60C5\u7EEA / effects \u2550\u2550 -->
  <g class="wm-layer wm-layer-fx" data-part="fx">
    <g class="wm-bubbles">
      <g class="wm-bubble-a"><circle cx="44" cy="186" r="4.5" fill="#9df6ff" opacity="0.55"/><circle cx="42.5" cy="184.5" r="1.4" fill="#fff" opacity="0.9"/></g>
      <g class="wm-bubble-b"><circle cx="201" cy="150" r="6" fill="#9df6ff" opacity="0.45"/><circle cx="199" cy="148" r="1.9" fill="#fff" opacity="0.9"/></g>
      <g class="wm-bubble-c"><circle cx="212" cy="112" r="3.4" fill="#9df6ff" opacity="0.4"/><circle cx="211" cy="111" r="1.1" fill="#fff" opacity="0.85"/></g>
    </g>

    <g class="wm-question">
      <path d="M181 88 C181 78 197 77 197 88 C197 95 188 95 188 102" fill="none" stroke="#f8c85c" stroke-width="5" stroke-linecap="round"/>
      <circle cx="188" cy="111" r="3" fill="#f8c85c"/>
    </g>

    <g class="wm-zzz">
      <text x="174" y="92" class="wm-zzz-text">Z</text>
      <text x="187" y="76" class="wm-zzz-text wm-zzz-2">z</text>
      <text x="198" y="62" class="wm-zzz-text wm-zzz-3">z</text>
    </g>

    <g class="wm-hearts">
      <path class="wm-heart wm-heart-1" d="M60 150 C60 144 68 142 70 148 C72 142 80 144 80 150 C80 158 70 163 70 163 C70 163 60 158 60 150 Z" fill="#ff8fa8"/>
      <path class="wm-heart wm-heart-2" d="M182 128 C182 122 190 120 192 126 C194 120 202 122 202 128 C202 136 192 141 192 141 C192 141 182 136 182 128 Z" fill="#ffa9bd"/>
    </g>

    <g class="wm-sparkles">
      <path d="M55 108 L57 114 L63 116 L57 118 L55 124 L53 118 L47 116 L53 114 Z" fill="#ffd979"/>
      <path d="M190 178 L192 183 L197 185 L192 187 L190 192 L188 187 L183 185 L188 183 Z" fill="#a8f4ff"/>
      <path d="M182 72 L184 77 L189 79 L184 81 L182 86 L180 81 L175 79 L180 77 Z" fill="#ffd979"/>
    </g>
  </g>

  <!-- exploded-view labels -->
  <g class="wm-labels" aria-hidden="true">
    <g class="wm-label wm-label-hair"><rect x="4" y="100" width="34" height="15" rx="7.5"/><text x="21" y="111">\u540E\u53D1</text><path d="M38 107 H54"/></g>
    <g class="wm-label wm-label-head"><rect x="198" y="92" width="34" height="15" rx="7.5"/><text x="215" y="103">\u5934\u90E8</text><path d="M198 99 H186"/></g>
    <g class="wm-label wm-label-body"><rect x="4" y="236" width="34" height="15" rx="7.5"/><text x="21" y="247">\u8EAB\u4F53</text><path d="M38 243 H68"/></g>
    <g class="wm-label wm-label-tail"><rect x="198" y="196" width="34" height="15" rx="7.5"/><text x="215" y="207">\u5C3E\u5DF4</text><path d="M198 203 H190"/></g>
  </g>
</svg>
`
  );

  // src/pet/styles.js
  var CSS = (
    /* css */
    `
:host {
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  color-scheme: inherit;
  font-family: var(--dsw-font-family, ui-sans-serif, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif);
  --wm-ink: var(--dsw-alias-label-primary, light-dark(#12172b, #f5f8ff));
  --wm-muted: var(--dsw-alias-label-secondary, light-dark(#5b6480, #b9c2d8));
  --wm-faint: var(--dsw-alias-label-tertiary, light-dark(#858ca3, #8e97ae));
  --wm-line: var(--dsw-alias-border-l2, light-dark(#1c25480f, #ffffff1f));
  --wm-surface: var(--dsw-specific-menu, light-dark(#fbfcffF2, #202538f2));
  --wm-card: var(--dsw-alias-bg-module-platform, light-dark(#ffffff, #2c3245));
  --wm-accent: #3fbcd4;
  --wm-accent-ink: #0c5060;
  --wm-gold: #f3bb4f;
  --wm-shadow: 0 10px 30px light-dark(#1a2a5a26, #00000066), 0 2px 8px light-dark(#1a2a5a14, #0000003d);
  --wm-radius: 16px;
}
* { box-sizing: border-box; }
button, input { font: inherit; }
button { cursor: pointer; }
[hidden] { display: none !important; }

.wm-root { position: fixed; inset: 0; pointer-events: none; }

/* \u2500\u2500 the pet itself \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-pet {
  position: absolute;
  width: var(--wm-size, 220px);
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: no-drag;
  touch-action: none;
  transform-origin: 50% 100%;
  isolation: isolate;
  cursor: grab;
}
.wm-pet[data-dragging="true"] { cursor: grabbing; }
.wm-pet::before {
  content: "";
  position: absolute;
  inset: 8% 2% 0;
  border-radius: 50% 50% 42% 42%;
  background: radial-gradient(ellipse at 50% 60%, #6fe6ff1f, transparent 68%);
  opacity: 0;
  transition: opacity .25s;
  pointer-events: none;
}
.wm-pet:hover::before, .wm-pet[data-state="working"]::before { opacity: 1; }
.wm-hit { position: absolute; inset: 0; z-index: 1; }

.wm-art {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  pointer-events: none;
  filter: drop-shadow(0 10px 10px #1b2a5c1f);
  transform-origin: 50% 100%;
  will-change: transform;
  animation: wm-float 5.6s ease-in-out infinite;
}
.wm-ground { transform-box: view-box; transform-origin: 120px 303px; animation: wm-ground 5.6s ease-in-out infinite; }

/* independent rig pieces */
#wmBody { transform-box: fill-box; transform-origin: 50% 100%; animation: wm-breathe 4.4s ease-in-out infinite; }
#wmHairBack { transform-box: view-box; transform-origin: 120px 72px; animation: wm-hair 6.2s ease-in-out infinite; }
#wmTail { transform-box: view-box; transform-origin: 152px 262px; animation: wm-tail 3.8s ease-in-out infinite; }
#wmArmL { transform-box: view-box; transform-origin: 97px 207px; animation: wm-arm-l 5.2s ease-in-out infinite; }
#wmArmR { transform-box: view-box; transform-origin: 143px 207px; animation: wm-arm-r 5.2s ease-in-out infinite; }
.wm-finL { transform-box: view-box; transform-origin: 74px 116px; animation: wm-fin-l 5.6s ease-in-out infinite; }
.wm-finR { transform-box: view-box; transform-origin: 166px 116px; animation: wm-fin-r 5.6s ease-in-out infinite; }
.wm-clip { transform-box: fill-box; transform-origin: center; animation: wm-clip 3.4s ease-in-out infinite; }
#wmHead {
  transform-box: view-box;
  transform-origin: 120px 170px;
  transform: translate(var(--wm-hx, 0px), var(--wm-hy, 0px)) rotate(calc(var(--wm-tilt, 0deg) + var(--wm-hr, 0deg)));
  transition: transform .28s cubic-bezier(.2, .8, .3, 1);
  will-change: transform;
}
.wm-pupils {
  transform: translate(var(--wm-px, 0px), var(--wm-py, 0px));
  transition: transform .2s ease-out;
}
.wm-eye { transform-box: fill-box; transform-origin: center; animation: wm-blink 6.4s infinite; }
.wm-eye:nth-of-type(2) { animation-delay: .06s; }

.wm-eyes-closed, .wm-brows-focus { display: none; }
[data-state="working"] .wm-brows { display: none; }
[data-state="working"] .wm-brows-focus { display: block; }
.wm-mouth { display: none; }
[data-state="idle"] .wm-mouth-smile,
[data-state="pat"] .wm-mouth-grin,
[data-state="celebrate"] .wm-mouth-grin,
[data-state="sleeping"] .wm-mouth-sleep,
[data-state="waiting"] .wm-mouth-o,
[data-state="working"] .wm-mouth-flat { display: block; }
[data-state="sleeping"] .wm-eyes-open,
[data-state="pat"] .wm-eyes-open,
[data-state="celebrate"] .wm-eyes-open { display: none; }
[data-state="sleeping"] .wm-eyes-closed,
[data-state="pat"] .wm-eyes-closed,
[data-state="celebrate"] .wm-eyes-closed { display: block; }

/* state body language */
[data-state="working"] .wm-art { animation: wm-work 2.6s ease-in-out infinite; }
[data-state="working"] #wmHead { --wm-tilt: -2deg; }
[data-state="working"] #wmArmL { animation: wm-type-l .42s ease-in-out infinite; }
[data-state="working"] #wmArmR { animation: wm-type-r .42s ease-in-out infinite; }

[data-state="waiting"] .wm-art { animation: wm-wait 2.8s ease-in-out infinite; }
[data-state="waiting"] #wmHead { --wm-tilt: -7deg; }
[data-state="waiting"] #wmArmR { animation: wm-raise 2.8s ease-in-out infinite; }

[data-state="sleeping"] .wm-art { animation: wm-sleep 6.4s ease-in-out infinite; }
[data-state="sleeping"] #wmHead { --wm-tilt: 5deg; --wm-hy: 3px; }
[data-state="sleeping"] #wmBody { animation-duration: 6.4s; }
[data-state="sleeping"] #wmTail { animation-duration: 8s; }

[data-state="pat"] .wm-art { animation: wm-pat .7s ease-in-out 2; }
[data-state="pat"] #wmHead { --wm-tilt: 4deg; }

[data-state="celebrate"] .wm-art { animation: wm-cheer .8s cubic-bezier(.3, 1.5, .5, 1) 3; }
[data-state="celebrate"] #wmHead { --wm-tilt: -5deg; }
[data-state="celebrate"] #wmArmL { animation: wm-cheer-l .8s ease-in-out 3; }
[data-state="celebrate"] #wmArmR { animation: wm-cheer-r .8s ease-in-out 3; }

[data-state="celebrate"] .wm-sparkles,
[data-state="pat"] .wm-hearts { display: block; }
[data-state="waiting"] .wm-question,
[data-state="sleeping"] .wm-zzz { display: block; }
.wm-question, .wm-zzz, .wm-hearts, .wm-sparkles { display: none; }
.wm-sparkles, .wm-hearts { animation: wm-fade 1.6s ease-in-out infinite; }
.wm-question { animation: wm-pop 2.8s ease-in-out infinite; }
.wm-zzz-text { font: 700 11px/1 ui-rounded, "PingFang SC", sans-serif; fill: #9fc6ff; }
.wm-zzz-2 { font-size: 9px; animation: wm-zzz 2.4s ease-in-out infinite; }
.wm-zzz-3 { font-size: 7px; animation: wm-zzz 2.4s .4s ease-in-out infinite; }
.wm-bubbles g { transform-box: view-box; }

/* buttons inside the pet */
.wm-gear {
  position: absolute;
  z-index: 3;
  top: 13%;
  right: 3%;
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: var(--wm-ink);
  background: var(--wm-surface);
  box-shadow: 0 1px 3px #0b143326, inset 0 0 0 .5px var(--wm-line);
  opacity: 0;
  transform: translateY(3px) scale(.9);
  transition: opacity .16s, transform .16s, background .16s;
}
.wm-gear svg { width: 16px; height: 16px; }
.wm-pet:hover .wm-gear, .wm-gear:focus-visible, .wm-root[data-panel="open"] .wm-gear { opacity: 1; transform: none; }
.wm-gear:hover { background: var(--wm-card); }
.wm-gear:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 2px; }

.wm-badge {
  position: absolute;
  z-index: 2;
  left: 1%;
  top: 7%;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #063844;
  background: #8cecf8;
  box-shadow: 0 0 0 1.5px #ffffffcc, 0 2px 5px #164e6a33;
  font: 700 11px/1 ui-monospace, Menlo, monospace;
}
.wm-root[data-working="true"] .wm-badge { display: inline-flex; }

/* \u2500\u2500 speech bubble \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-bubble {
  position: absolute;
  z-index: 2;
  width: max-content;
  max-width: min(236px, calc(100vw - 30px));
  padding: 9px 14px 10px;
  border-radius: 15px 16px 15px 6px;
  color: light-dark(#203050, #e9f1ff);
  background: light-dark(#ffffffF2, #232c49f2);
  box-shadow: 0 8px 22px light-dark(#1b2a5c26, #00000066), inset 0 0 0 .5px light-dark(#ffffff99, #ffffff1f);
  font-size: 12.5px;
  line-height: 1.45;
  font-weight: 550;
  letter-spacing: .01em;
  text-align: center;
  text-wrap: balance;
  overflow-wrap: anywhere;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, calc(var(--wm-ty, -100%) + 4px)) scale(.96);
  transform-origin: 50% 100%;
  transition: opacity .18s, transform .2s cubic-bezier(.2, .8, .3, 1);
}
.wm-bubble::after {
  content: "";
  position: absolute;
  left: 22px;
  bottom: -5px;
  width: 10px;
  height: 10px;
  background: inherit;
  border-radius: 2px;
  transform: rotate(45deg);
  box-shadow: 2px 2px 4px #1b2a5c12;
}
.wm-bubble[data-side="below"] { border-radius: 6px 15px 16px 15px; transform-origin: 50% 0; }
.wm-bubble[data-side="below"]::after { top: -5px; bottom: auto; }
.wm-root[data-bubble="true"] .wm-bubble { opacity: 1; transform: translate(-50%, var(--wm-ty, -100%)) scale(1); }
.wm-bubble .wm-bubble-hint { display: block; margin-top: 2px; color: var(--wm-muted); font-size: 10.5px; font-weight: 500; }

/* \u2500\u2500 settings panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-panel {
  position: fixed;
  z-index: 5;
  width: 252px;
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 24px);
  overflow: auto;
  padding: 13px;
  border-radius: var(--wm-radius);
  corner-shape: var(--dsw-corner-shape, superellipse(1.5));
  color: var(--wm-ink);
  background: var(--wm-surface);
  box-shadow: var(--wm-shadow), inset 0 0 0 .5px var(--wm-line);
  backdrop-filter: blur(26px) saturate(150%);
  -webkit-backdrop-filter: blur(26px) saturate(150%);
  pointer-events: auto;
  opacity: 0;
  transform: translateY(6px) scale(.98);
  transform-origin: 80% 100%;
  transition: opacity .16s, transform .18s cubic-bezier(.2, .8, .3, 1);
  font-size: 12px;
  line-height: 1.5;
  scrollbar-width: thin;
}
.wm-root[data-panel="open"] .wm-panel { opacity: 1; transform: none; }
.wm-panel:not([data-visible="true"]) { visibility: hidden; pointer-events: none; }
.wm-panel-head { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
.wm-panel-head strong { font-size: 13.5px; font-weight: 650; letter-spacing: .02em; }
.wm-tag { padding: 1px 7px; border-radius: 99px; color: var(--wm-accent-ink); background: #79e6f24d; font-size: 10px; font-weight: 600; }
.wm-close {
  margin-left: auto; width: 26px; height: 26px; padding: 0; display: grid; place-items: center;
  border: 0; border-radius: 8px; color: var(--wm-muted); background: transparent;
}
.wm-close:hover { color: var(--wm-ink); background: var(--wm-line); }
.wm-status { margin: 3px 0 10px; color: var(--wm-muted); font-size: 11px; line-height: 1.5; }
.wm-status b { color: var(--wm-accent); font-weight: 650; }

.wm-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 34px; }
.wm-row > label { color: var(--wm-ink); flex: 1; min-width: 0; }
.wm-value { color: var(--wm-faint); font-size: 10.5px; font-variant-numeric: tabular-nums; }
.wm-divider { height: .5px; margin: 8px 0; background: var(--wm-line); }

.wm-range { display: flex; align-items: center; gap: 8px; flex: 0 0 126px; }
.wm-range input {
  appearance: none; width: 100%; height: 20px; margin: 0; background: transparent; cursor: pointer; accent-color: var(--wm-accent);
}
.wm-range input::-webkit-slider-runnable-track {
  height: 4px; border-radius: 99px;
  background: linear-gradient(to right, var(--wm-accent) 0 var(--wm-p, 50%), var(--wm-line) var(--wm-p, 50%) 100%);
}
.wm-range input::-webkit-slider-thumb {
  appearance: none; width: 14px; height: 14px; margin-top: -5px; border-radius: 50%;
  border: 2px solid #fff; background: var(--wm-accent); box-shadow: 0 1px 3px #123;
}

.wm-switch { position: relative; flex: none; width: 34px; height: 20px; padding: 0; border: 0; border-radius: 99px; background: #8b95ad59; transition: background .16s; }
.wm-switch::after { content: ""; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px #0003; transition: transform .18s cubic-bezier(.2, .8, .3, 1); }
.wm-switch[aria-checked="true"] { background: var(--wm-accent); }
.wm-switch[aria-checked="true"]::after { transform: translateX(14px); }
.wm-switch:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 2px; }

.wm-layers { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 2px; }
.wm-chip {
  display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 8px;
  border: 0; border-radius: 8px; color: var(--wm-muted); background: var(--wm-line);
  font-size: 10.5px; font-weight: 550;
}
.wm-chip::before { content: ""; width: 6px; height: 6px; border-radius: 2px; background: var(--chip, var(--wm-accent)); }
.wm-chip:hover, .wm-chip[aria-pressed="true"] { color: var(--wm-ink); background: #78e5f23d; }

.wm-actions { display: flex; gap: 6px; margin-top: 10px; }
.wm-action {
  flex: 1; min-width: 0; height: 29px; padding: 0 8px; border: 0; border-radius: 8px;
  color: var(--wm-ink); background: var(--wm-line); font-size: 11px; font-weight: 550;
  white-space: nowrap;
}
.wm-action:hover { background: #78e5f238; }
.wm-action.primary { color: #063844; background: #8cecf8; }
.wm-action.primary:hover { background: #a5f4fd; }
.wm-action:focus-visible, .wm-chip:focus-visible, .wm-close:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 1px; }

.wm-foot { margin-top: 9px; color: var(--wm-faint); font-size: 9.5px; text-align: center; letter-spacing: .02em; }

/* \u2500\u2500 restore chip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-restore {
  position: fixed; z-index: 6; left: 18px; bottom: 64px;
  display: none; align-items: center; gap: 6px;
  height: 30px; padding: 0 11px; border: 0; border-radius: 99px;
  color: var(--wm-muted); background: var(--wm-surface);
  box-shadow: var(--wm-shadow), inset 0 0 0 .5px var(--wm-line);
  font-size: 11px; pointer-events: auto;
}
.wm-restore:hover { color: var(--wm-ink); }
.wm-root[data-hidden="true"] .wm-pet,
.wm-root[data-hidden="true"] .wm-bubble,
.wm-root[data-hidden="true"] .wm-panel { display: none; }
.wm-root[data-hidden="true"] .wm-restore { display: inline-flex; }

/* \u2500\u2500 slice / exploded view \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-layer { transition: transform .62s cubic-bezier(.2, .9, .22, 1.02); }
.wm-root[data-explode="true"] .wm-layer-hair { transform: translate(-17px, -4px) rotate(-2.4deg); }
.wm-root[data-explode="true"] .wm-layer-tail { transform: translate(20px, -8px) rotate(4deg); }
.wm-root[data-explode="true"] .wm-layer-head { transform: translate(0, -30px); }
.wm-root[data-explode="true"] .wm-layer-body { transform: translate(0, 12px); }
.wm-root[data-explode="true"] .wm-layer-armL { transform: translate(-19px, 7px) rotate(-5deg); }
.wm-root[data-explode="true"] .wm-layer-armR { transform: translate(19px, 7px) rotate(5deg); }
.wm-root[data-explode="true"] .wm-layer-fx { transform: translate(6px, -14px); }
.wm-root[data-explode="true"] .wm-labels { opacity: 1; }
.wm-root[data-explode="true"] .wm-art { animation-play-state: paused; }
.wm-root[data-explode="true"] .wm-neck { opacity: 0; }

.wm-labels { opacity: 0; transition: opacity .3s .18s; pointer-events: none; }
.wm-label rect { fill: light-dark(#ffffffF2, #1b2340f2); stroke: #3fbcd44d; stroke-width: .7; }
.wm-label text { fill: light-dark(#39465f, #cfdcff); font: 600 7.4px/1 ui-sans-serif, "PingFang SC", sans-serif; text-anchor: middle; letter-spacing: .04em; }
.wm-label path { stroke: #3fbcd48c; stroke-width: .8; stroke-dasharray: 2 2; fill: none; }

.wm-root[data-hl="hair"] .wm-layer-hair,
.wm-root[data-hl="head"] .wm-layer-head,
.wm-root[data-hl="body"] .wm-layer-body,
.wm-root[data-hl="arms"] .wm-layer-armL,
.wm-root[data-hl="arms"] .wm-layer-armR,
.wm-root[data-hl="tail"] .wm-layer-tail { filter: drop-shadow(0 0 7px #ffd15fcc); }

/* \u2500\u2500 motion switches \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.wm-root[data-motion="off"] .wm-art,
.wm-root[data-motion="off"] .wm-layer,
.wm-root[data-motion="off"] #wmBody,
.wm-root[data-motion="off"] #wmHairBack,
.wm-root[data-motion="off"] #wmTail,
.wm-root[data-motion="off"] #wmArmL,
.wm-root[data-motion="off"] #wmArmR,
.wm-root[data-motion="off"] .wm-finL,
.wm-root[data-motion="off"] .wm-finR,
.wm-root[data-motion="off"] .wm-eye,
.wm-root[data-motion="off"] .wm-clip,
.wm-root[data-motion="off"] .wm-question,
.wm-root[data-motion="off"] .wm-sparkles,
.wm-root[data-motion="off"] .wm-hearts,
.wm-root[data-motion="off"] .wm-zzz-text { animation: none !important; }

@keyframes wm-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes wm-ground { 0%, 100% { transform: scaleX(1); opacity: .16; } 50% { transform: scaleX(.92); opacity: .11; } }
@keyframes wm-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.018) translateY(-1px); } }
@keyframes wm-hair { 0%, 100% { transform: rotate(-.7deg); } 50% { transform: rotate(1.1deg); } }
@keyframes wm-tail { 0%, 100% { transform: rotate(-1.6deg); } 50% { transform: rotate(2.4deg); } }
@keyframes wm-arm-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-1.6deg); } }
@keyframes wm-arm-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(1.4deg); } }
@keyframes wm-fin-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-2.6deg); } }
@keyframes wm-fin-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(2.6deg); } }
@keyframes wm-clip { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(5deg); } }
@keyframes wm-blink { 0%, 92.4%, 96.4%, 100% { transform: scaleY(1); } 94.2%, 95% { transform: scaleY(.06); } }
@keyframes wm-work { 0%, 100% { transform: translateY(0) rotate(-.3deg); } 50% { transform: translateY(-2px) rotate(.25deg); } }
@keyframes wm-type-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-7deg); } }
@keyframes wm-type-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(7deg); } }
@keyframes wm-wait { 0%, 100% { transform: translateY(0) rotate(-.6deg); } 50% { transform: translateY(-2px) rotate(.4deg); } }
@keyframes wm-raise { 0%, 100% { transform: rotate(-58deg); } 50% { transform: rotate(-72deg); } }
@keyframes wm-sleep { 0%, 100% { transform: translateY(0) scaleY(1); } 50% { transform: translateY(1px) scaleY(.995); } }
@keyframes wm-pat { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-5px) scale(1.02); } }
@keyframes wm-cheer { 0%, 100% { transform: translateY(0) rotate(-2deg); } 40% { transform: translateY(-18px) rotate(3deg); } 70% { transform: translateY(-4px) rotate(-1deg); } }
@keyframes wm-cheer-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(36deg); } }
@keyframes wm-cheer-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-36deg); } }
@keyframes wm-fade { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
@keyframes wm-pop { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes wm-zzz { 0% { opacity: .15; transform: translateY(2px); } 50% { opacity: 1; } 100% { opacity: .15; transform: translateY(-3px); } }

@media (prefers-reduced-motion: reduce) {
  .wm-art, .wm-layer, #wmBody, #wmHairBack, #wmTail, #wmArmL, #wmArmR, .wm-finL, .wm-finR, .wm-eye,
  .wm-clip, .wm-question, .wm-sparkles, .wm-hearts, .wm-zzz-text { animation: none !important; }
}
`
  );

  // src/pet/session.js
  function summarizeSessions(catalog, statuses) {
    const map = statuses instanceof Map ? statuses : new Map(Object.entries(statuses || {}));
    let running = 0;
    let waiting = 0;
    const seen = /* @__PURE__ */ new Set();
    for (const [id, status] of map) {
      seen.add(String(id));
      if (status?.pendingInteraction != null) waiting += 1;
      if (status?.running === true && status.pendingInteraction == null) running += 1;
    }
    const byId = catalog?.byId || {};
    for (const [id, entry] of Object.entries(byId)) {
      if (seen.has(String(id))) continue;
      if (entry?.running === true) running += 1;
    }
    return { running, waiting, known: seen.size };
  }

  // src/pet/view.js
  var STORAGE_KEY = "dsh.whale-musume.v1";
  var BASE_SIZE = 220;
  var DEFAULTS = Object.freeze({
    x: null,
    y: null,
    scale: 1,
    track: true,
    explode: false,
    motion: true,
    hidden: false
  });
  var LINES = {
    hello: ["\u55E8\uFF0C\u6211\u662F\u5C0F\u6C50\u3002", "\u4ECA\u5929\u4E5F\u4E00\u8D77\u52A0\u6CB9\u5427\uFF5E", "\u6211\u5728\u8FD9\u513F\u966A\u4F60\u3002"],
    idle: ["\u6211\u5728\u54E6\u3002", "\u5199\u7D2F\u4E86\u5C31\u6478\u6478\u6211\u5427\u3002", "\u6478\u9C7C\u4E94\u5206\u949F\u4E5F\u6CA1\u5173\u7CFB\uFF5E", "\u4ECA\u5929\u4E5F\u8F9B\u82E6\u5566\u3002"],
    working: ["\u966A\u4F60\u4E00\u8D77\u4E13\u6CE8\u4E2D\u2026", "\u6211\u4E5F\u5728\u8BA4\u771F\u770B\u7740\u54E6\u3002", "\u4E00\u8D77\u628A\u8FD9\u4EF6\u4E8B\u505A\u5B8C\u5427\uFF01"],
    waiting: ["\u8FD9\u91CC\u9700\u8981\u4F60\u786E\u8BA4\u4E00\u4E0B\uFF5E", "\u6709\u4E2A\u9009\u62E9\u5728\u7B49\u4F60\u54E6\u3002", "\u6211\u5E2E\u4F60\u4E3E\u7740\u5C0F\u724C\u5B50\u3002"],
    celebrate: ["\u5B8C\u6210\u5566\uFF01\u8F9B\u82E6\u8F9B\u82E6\uFF5E", "\u597D\u8036\uFF0C\u6536\u5DE5\uFF01", "\u8FD9\u4E00\u56DE\u5408\u6F02\u4EAE\uFF01"],
    sleeping: ["Zzz\u2026 \u6709\u4E8B\u53EB\u6211\u3002"],
    pat: ["\u563F\u563F\u2026\u518D\u6478\u4E00\u4E0B\u4E5F\u53EF\u4EE5\u3002", "\u545C\u2026\u597D\u75D2\u3002", "\u4ECA\u5929\u4E5F\u6700\u559C\u6B22\u4F60\u4E86\u3002"]
  };
  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }
  function readSettings() {
    try {
      const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULTS };
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULTS,
        ...Object.fromEntries(Object.entries(parsed || {}).filter(([key]) => key in DEFAULTS))
      };
    } catch {
      return { ...DEFAULTS };
    }
  }
  function pick(list, last) {
    if (!list.length) return "";
    let next = list[Math.floor(Math.random() * list.length)];
    if (list.length > 1 && next === last) next = list[(list.indexOf(next) + 1) % list.length];
    return next;
  }
  var WhaleMusumeView = class {
    constructor(host, options = {}) {
      if (!host) throw new Error("WhaleMusumeView needs a host element");
      this.host = host;
      this.doc = host.ownerDocument;
      this.win = this.doc.defaultView || globalThis;
      this.lang = options.language?.startsWith?.("en") ? "en" : "zh";
      this.settings = readSettings();
      this.session = { running: 0, waiting: 0, ready: false };
      this.sessionState = "idle";
      this.reaction = null;
      this.sleeping = false;
      this.lastLine = "";
      this.bubbleTimer = 0;
      this.reactionTimer = 0;
      this.idleTimer = 0;
      this.drag = null;
      this.pinHighlight = null;
      this.pointer = { x: 0, y: 0 };
      this.disposed = false;
      this.frame = 0;
      this.shadow = host.shadowRoot || host.attachShadow({ mode: "open" });
      this.shadow.innerHTML = `<style>${CSS}</style>${this.template()}`;
      host.__whaleMusume = this;
      this.root = this.shadow.querySelector(".wm-root");
      this.pet = this.shadow.querySelector(".wm-pet");
      this.art = this.shadow.querySelector(".wm-art");
      this.bubble = this.shadow.querySelector(".wm-bubble");
      this.panel = this.shadow.querySelector(".wm-panel");
      this.gear = this.shadow.querySelector(".wm-gear");
      this.badge = this.shadow.querySelector(".wm-badge");
      this.bind();
      this.applySettings({ layout: true });
      this.render();
      this.resizeObserver = new this.win.ResizeObserver(() => this.layout());
      this.resizeObserver.observe(this.doc.documentElement);
      this.win.addEventListener("resize", this.onResize);
      this.win.addEventListener("pointermove", this.onPointerMove, { passive: true });
      this.doc.addEventListener("pointerdown", this.onDocPointerDown, true);
      this.doc.addEventListener("keydown", this.onKeyDown, true);
      this.frame = this.win.requestAnimationFrame(() => this.layout());
      this.idleTimer = this.win.setTimeout(() => this.say(pick(LINES.hello, this.lastLine), 4200), 900);
    }
    template() {
      return `
      <div class="wm-root" data-state="idle" data-panel="closed" data-hidden="false" data-explode="false" data-motion="on">
        <div class="wm-pet" tabindex="0" role="button" aria-label="\u9CB8\u9C7C\u5A18\u5C0F\u6C50\uFF0C\u62D6\u62FD\u79FB\u52A8\uFF0C\u70B9\u51FB\u6478\u6478\u5934">
          <div class="wm-hit"></div>
          <div class="wm-art-wrap">${ART}</div>
          <div class="wm-badge" aria-hidden="true">0</div>
          <button class="wm-gear" type="button" title="\u5C0F\u6C50\u7684\u8BBE\u7F6E" aria-label="\u6253\u5F00\u5C0F\u6C50\u7684\u8BBE\u7F6E" aria-expanded="false">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <circle cx="6.2" cy="4.5" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="10" cy="8" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="5" cy="11.5" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
            </svg>
          </button>
        </div>

        <div class="wm-bubble" role="status" aria-live="polite"></div>

        <div class="wm-panel" role="dialog" aria-label="\u5C0F\u6C50\u7684\u8BBE\u7F6E">
          <div class="wm-panel-head">
            <strong>\u5C0F\u6C50</strong>
            <span class="wm-tag">\u9CB8\u9C7C\u5A18</span>
            <button class="wm-close" type="button" aria-label="\u5173\u95ED\u8BBE\u7F6E">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </div>
          <p class="wm-status"></p>

          <div class="wm-row">
            <label for="wm-size">\u5927\u5C0F</label>
            <span class="wm-value wm-size-value">100%</span>
            <div class="wm-range"><input id="wm-size" class="wm-size" type="range" min="70" max="145" step="5" value="100" aria-label="\u684C\u5BA0\u5927\u5C0F"></div>
          </div>

          <div class="wm-divider"></div>

          <div class="wm-row">
            <label id="wm-track-label">\u89C6\u7EBF\u8DDF\u968F</label>
            <button class="wm-switch wm-track" type="button" role="switch" aria-checked="true" aria-labelledby="wm-track-label"></button>
          </div>
          <div class="wm-row">
            <label id="wm-explode-label">\u5206\u5272\u89C6\u56FE</label>
            <button class="wm-switch wm-explode" type="button" role="switch" aria-checked="false" aria-labelledby="wm-explode-label"></button>
          </div>
          <div class="wm-row">
            <label id="wm-motion-label">\u52A8\u6001\u6548\u679C</label>
            <button class="wm-switch wm-motion" type="button" role="switch" aria-checked="true" aria-labelledby="wm-motion-label"></button>
          </div>

          <div class="wm-divider"></div>

          <div class="wm-layers" aria-label="\u56FE\u5C42">
            <button class="wm-chip" type="button" data-layer="hair" style="--chip:#6f86e8">\u540E\u53D1</button>
            <button class="wm-chip" type="button" data-layer="head" style="--chip:#ffcf9e">\u5934\u90E8</button>
            <button class="wm-chip" type="button" data-layer="body" style="--chip:#8cecf8">\u8EAB\u4F53</button>
            <button class="wm-chip" type="button" data-layer="arms" style="--chip:#f6a7b8">\u624B\u81C2</button>
            <button class="wm-chip" type="button" data-layer="tail" style="--chip:#4159b4">\u5C3E\u5DF4</button>
          </div>

          <div class="wm-actions">
            <button class="wm-action primary wm-pat" type="button">\u6478\u6478\u5934</button>
            <button class="wm-action wm-sleep" type="button">\u7761\u89C9</button>
            <button class="wm-action wm-hide" type="button">\u9690\u85CF</button>
          </div>
          <p class="wm-foot">\u62D6\u62FD\u79FB\u52A8 \xB7 \u53F3\u952E\u6253\u5F00\u8BBE\u7F6E \xB7 \u53CC\u51FB\u5524\u9192</p>
        </div>

        <button class="wm-restore" type="button" aria-label="\u627E\u56DE\u5C0F\u6C50">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 9c3.2.4 5.2-1.7 6-4 1.1 3.2 3.4 4.1 6 3.4-1 2.5-3.4 4.1-6.1 4.1S2.8 11.4 2 9Z" fill="#3fbcd4"/>
            <path d="M8 1.8c1.2 1 1.9 2.2 2.2 3.4C9.2 5.8 8.4 5 8 4.2 7.6 5 6.8 5.8 5.8 6.2 6.1 5 6.8 3.8 8 1.8Z" fill="#8cecf8"/>
          </svg>
          \u627E\u56DE\u5C0F\u6C50
        </button>
      </div>`;
    }
    bind() {
      this.onResize = () => {
        this.clampPosition();
        this.layout();
      };
      this.onDocPointerDown = (event) => {
        if (this.root.dataset.panel !== "open") return;
        const path = event.composedPath?.() || [];
        if (path.includes(this.panel) || path.includes(this.gear)) return;
        this.closePanel();
      };
      this.onKeyDown = (event) => {
        if (event.key === "Escape" && this.root.dataset.panel === "open") this.closePanel();
      };
      this.onPointerMove = (event) => {
        if (!this.settings.track || this.settings.explode || this.reaction === "pat") return;
        const rect = this.pet.getBoundingClientRect();
        if (!rect.width) return;
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height * 0.48;
        const dx = clamp((event.clientX - cx) / Math.max(220, this.win.innerWidth * 0.5), -1, 1);
        const dy = clamp((event.clientY - cy) / Math.max(180, this.win.innerHeight * 0.55), -1, 1);
        if (this.frame) return;
        this.frame = this.win.requestAnimationFrame(() => {
          this.frame = 0;
          if (this.disposed) return;
          this.pointer = { x: dx, y: dy };
          this.applyGaze();
        });
      };
      this.pet.addEventListener("pointerdown", this.onPetDown.bind(this));
      this.pet.addEventListener("pointermove", this.onPetMove.bind(this));
      this.pet.addEventListener("pointerup", this.onPetUp.bind(this));
      this.pet.addEventListener("pointercancel", this.onPetUp.bind(this));
      this.pet.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        this.togglePanel();
      });
      this.pet.addEventListener("pointerenter", () => {
        if (this.root.dataset.bubble !== "true" && this.bubbleText) this.showBubble(true);
      });
      this.pet.addEventListener("pointerleave", () => {
        if (this.root.dataset.bubble === "true" && this.reaction !== "pat") this.showBubble(false);
      });
      this.pet.addEventListener("dblclick", (event) => {
        event.preventDefault();
        this.toggleSleep();
      });
      this.pet.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.pat();
        }
      });
      this.gear.addEventListener("click", (event) => {
        event.stopPropagation();
        this.togglePanel();
      });
      this.shadow.querySelector(".wm-close").addEventListener("click", () => this.closePanel());
      this.shadow.querySelector(".wm-restore").addEventListener("click", () => {
        this.settings.hidden = false;
        this.applySettings({ layout: true });
        this.save();
        this.say("\u6211\u56DE\u6765\u5566\u3002", 2600);
      });
      this.sizeInput = this.shadow.querySelector(".wm-size");
      this.sizeInput.addEventListener("input", () => {
        this.settings.scale = Number(this.sizeInput.value) / 100;
        this.applySettings({ layout: true });
        this.save();
      });
      this.trackSwitch = this.shadow.querySelector(".wm-track");
      this.trackSwitch.addEventListener("click", () => {
        this.settings.track = !this.settings.track;
        this.applySettings();
        this.save();
      });
      this.explodeSwitch = this.shadow.querySelector(".wm-explode");
      this.explodeSwitch.addEventListener("click", () => {
        this.settings.explode = !this.settings.explode;
        this.applySettings();
        this.save();
      });
      this.motionSwitch = this.shadow.querySelector(".wm-motion");
      this.motionSwitch.addEventListener("click", () => {
        this.settings.motion = !this.settings.motion;
        this.applySettings();
        this.save();
      });
      for (const chip of this.shadow.querySelectorAll(".wm-chip")) {
        chip.addEventListener("pointerenter", () => {
          if (!this.pinHighlight) this.root.dataset.hl = chip.dataset.layer;
        });
        chip.addEventListener("pointerleave", () => {
          if (!this.pinHighlight) delete this.root.dataset.hl;
        });
        chip.addEventListener("click", () => {
          const layer = chip.dataset.layer;
          this.pinHighlight = this.pinHighlight === layer ? null : layer;
          if (this.pinHighlight) this.root.dataset.hl = layer;
          else delete this.root.dataset.hl;
          for (const item of this.shadow.querySelectorAll(".wm-chip")) {
            item.setAttribute("aria-pressed", String(item.dataset.layer === this.pinHighlight));
          }
        });
      }
      this.shadow.querySelector(".wm-pat").addEventListener("click", () => this.pat());
      this.shadow.querySelector(".wm-sleep").addEventListener("click", () => this.toggleSleep());
      this.shadow.querySelector(".wm-hide").addEventListener("click", () => {
        this.settings.hidden = true;
        this.closePanel();
        this.applySettings();
        this.save();
      });
    }
    onPetDown(event) {
      if (event.button !== 0) return;
      if (event.target.closest?.(".wm-gear")) return;
      const rect = this.pet.getBoundingClientRect();
      this.drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        left: rect.left,
        top: rect.top,
        moved: false,
        at: Date.now()
      };
      try {
        this.pet.setPointerCapture?.(event.pointerId);
      } catch {
      }
      this.pet.dataset.dragging = "false";
    }
    onPetMove(event) {
      if (!this.drag || event.pointerId !== this.drag.pointerId) return;
      const dx = event.clientX - this.drag.startX;
      const dy = event.clientY - this.drag.startY;
      if (!this.drag.moved && Math.hypot(dx, dy) < 4) return;
      this.drag.moved = true;
      this.pet.dataset.dragging = "true";
      this.showBubble(false);
      const rect = this.pet.getBoundingClientRect();
      const left = clamp(this.drag.left + dx, 4, Math.max(4, this.win.innerWidth - rect.width - 4));
      const top = clamp(this.drag.top + dy, 4, Math.max(4, this.win.innerHeight - rect.height - 4));
      this.setPosition(left, top, { persist: false });
    }
    onPetUp(event) {
      if (!this.drag || event.pointerId !== this.drag.pointerId) return;
      const drag = this.drag;
      this.drag = null;
      this.pet.dataset.dragging = "false";
      try {
        this.pet.releasePointerCapture?.(event.pointerId);
      } catch {
      }
      if (drag.moved) {
        this.layout();
        this.save();
        return;
      }
      if (Date.now() - drag.at < 700) this.pat();
    }
    applySettings({ layout = false } = {}) {
      const { scale: scale2, track, explode, motion, hidden } = this.settings;
      const px = Math.round(BASE_SIZE * scale2);
      this.root.style.setProperty("--wm-size", `${px}px`);
      this.root.dataset.motion = motion ? "on" : "off";
      this.root.dataset.explode = String(Boolean(explode));
      this.root.dataset.hidden = String(Boolean(hidden));
      this.trackSwitch?.setAttribute("aria-checked", String(Boolean(track)));
      this.explodeSwitch?.setAttribute("aria-checked", String(Boolean(explode)));
      this.motionSwitch?.setAttribute("aria-checked", String(Boolean(motion)));
      if (this.sizeInput) {
        this.sizeInput.value = String(Math.round(scale2 * 100));
        this.sizeInput.style.setProperty("--wm-p", `${(scale2 * 100 - 70) / 75 * 100}%`);
      }
      const value = this.shadow.querySelector(".wm-size-value");
      if (value) value.textContent = `${Math.round(scale2 * 100)}%`;
      if (!track) this.resetGaze();
      if (layout) this.layout();
      if (explode) this.render();
    }
    layout() {
      if (this.disposed) return;
      const rect = this.pet.getBoundingClientRect();
      const declared = Number.parseFloat(this.root.style.getPropertyValue("--wm-size")) || BASE_SIZE;
      const width2 = rect.width || declared;
      const height2 = rect.height || width2 * (320 / 240);
      const vw = this.win.innerWidth;
      const vh = this.win.innerHeight;
      const restored = this.settings.x == null || this.settings.y == null;
      let left = restored ? 22 : this.settings.x;
      let top = restored ? vh - height2 - 60 : this.settings.y;
      left = clamp(left, 4, Math.max(4, vw - width2 - 4));
      top = clamp(top, 4, Math.max(4, vh - height2 - 4));
      this.setPosition(left, top, { persist: false });
      this.positionPanel(left, top, width2);
      this.positionBubble(left, top, width2, height2);
    }
    setPosition(left, top, { persist = true } = {}) {
      this.pet.style.left = `${Math.round(left)}px`;
      this.pet.style.top = `${Math.round(top)}px`;
      this.settings.x = Math.round(left);
      this.settings.y = Math.round(top);
      if (persist) this.save();
      this.positionBubble(left, top, this.pet.getBoundingClientRect().width, this.pet.getBoundingClientRect().height);
      if (this.root.dataset.panel === "open") this.positionPanel(left, top, this.pet.getBoundingClientRect().width);
    }
    clampPosition() {
      if (this.settings.x == null) return;
      const rect = this.pet.getBoundingClientRect();
      this.settings.x = clamp(this.settings.x, 4, Math.max(4, this.win.innerWidth - rect.width - 4));
      this.settings.y = clamp(this.settings.y, 4, Math.max(4, this.win.innerHeight - rect.height - 4));
    }
    positionBubble(left, top, width2, height2) {
      const vw = this.win.innerWidth;
      const half = Math.min(Math.max(this.bubble.offsetWidth || 220, 120) / 2, (vw - 16) / 2);
      const center = clamp(left + width2 / 2, half + 8, vw - half - 8);
      this.bubble.style.left = `${Math.round(center)}px`;
      if (top > 96) {
        this.bubble.style.top = `${Math.round(top - 6)}px`;
        this.bubble.dataset.side = "above";
        this.bubble.style.setProperty("--wm-ty", "-100%");
      } else {
        this.bubble.style.top = `${Math.round(top + height2 + 8)}px`;
        this.bubble.dataset.side = "below";
        this.bubble.style.setProperty("--wm-ty", "0%");
      }
    }
    positionPanel(left, top, width2) {
      const panelWidth = this.panel.offsetWidth || 252;
      const panelHeight = this.panel.offsetHeight || 330;
      const vw = this.win.innerWidth;
      const vh = this.win.innerHeight;
      let x = left + width2 + 10;
      if (x + panelWidth > vw - 8) x = left - panelWidth - 10;
      if (x < 8) x = clamp(left + width2 / 2 - panelWidth / 2, 8, vw - panelWidth - 8);
      const y = clamp(top + this.pet.offsetHeight - panelHeight, 10, Math.max(10, vh - panelHeight - 10));
      this.panel.style.left = `${Math.round(x)}px`;
      this.panel.style.top = `${Math.round(y)}px`;
    }
    togglePanel() {
      if (this.root.dataset.panel === "open") this.closePanel();
      else this.openPanel();
    }
    openPanel() {
      this.showBubble(false);
      this.panel.dataset.visible = "true";
      this.panel.offsetWidth;
      this.root.dataset.panel = "open";
      this.gear?.setAttribute("aria-expanded", "true");
      this.positionPanel(this.settings.x ?? 22, this.settings.y ?? 40, this.pet.getBoundingClientRect().width);
    }
    closePanel() {
      this.root.dataset.panel = "closed";
      this.gear?.setAttribute("aria-expanded", "false");
      this.panel.dataset.visible = "false";
    }
    applyGaze() {
      if (!this.settings.track) return this.resetGaze();
      const { x, y } = this.pointer;
      this.art.style.setProperty("--wm-hx", `${(x * 4.5).toFixed(2)}px`);
      this.art.style.setProperty("--wm-hy", `${(y * 3).toFixed(2)}px`);
      this.art.style.setProperty("--wm-hr", `${(x * 1.8).toFixed(2)}deg`);
      this.art.style.setProperty("--wm-px", `${(x * 2.8).toFixed(2)}px`);
      this.art.style.setProperty("--wm-py", `${(y * 2.2).toFixed(2)}px`);
    }
    resetGaze() {
      for (const name of ["--wm-hx", "--wm-hy", "--wm-hr", "--wm-px", "--wm-py"]) {
        this.art.style.removeProperty(name);
      }
    }
    updateSessions(catalog, statuses) {
      if (this.disposed) return;
      const { running, waiting } = summarizeSessions(catalog, statuses);
      const wasRunning = this.session.running > 0;
      const wasWaiting = this.session.waiting > 0;
      this.session = { running, waiting, ready: catalog?.phase === "ready" || running + waiting > 0 };
      this.badge.textContent = String(running);
      this.root.dataset.working = String(running > 0);
      if (waiting > 0) {
        this.reaction = null;
        this.sessionState = "waiting";
        if (!wasWaiting) this.say(pick(LINES.waiting, this.lastLine), 6e3);
      } else if (running > 0) {
        this.sessionState = "working";
        if (!wasRunning) {
          this.reaction = null;
          this.sleeping = false;
          this.say(running > 1 ? `\u966A\u4F60\u4E00\u8D77\u4E13\u6CE8\u4E2D\u2026 ${running} \u4E2A\u4EFB\u52A1` : "\u966A\u4F60\u4E00\u8D77\u4E13\u6CE8\u4E2D\u2026", 4e3);
        }
      } else {
        this.sessionState = "idle";
        if (wasRunning || wasWaiting) this.celebrate();
      }
      this.updateStatusLine();
      this.render();
    }
    updateStatusLine() {
      const el = this.shadow.querySelector(".wm-status");
      if (!el) return;
      const n = this.session.running;
      el.innerHTML = this.sleeping ? "\u7761\u7740\u4E86 \xB7 \u70B9\u4E00\u4E0B\u53EB\u9192" : this.reaction === "pat" ? "\u6B63\u5728\u88AB\u6478\u6478\u5934 \xB7 \u547C\u565C\u547C\u565C" : this.reaction === "celebrate" ? "\u521A\u521A\u5B8C\u6210\u4E86\u4E00\u4EF6\u4E8B \xB7 \u8F9B\u82E6\u5566" : this.session.waiting > 0 ? "<b>\u7B49\u4F60\u786E\u8BA4</b> \xB7 \u5C0F\u6C50\u4E3E\u7740\u5C0F\u724C\u5B50" : n > 0 ? `<b>${n}</b> \u4E2A\u4EFB\u52A1\u8FDB\u884C\u4E2D \xB7 \u5C0F\u6C50\u5728\u966A\u4F60` : "\u5F85\u673A\u4E2D \xB7 \u5728\u89D2\u843D\u91CC\u966A\u4F60";
    }
    render() {
      if (this.disposed) return;
      const state2 = this.reaction || (this.sleeping && this.sessionState !== "waiting" ? "sleeping" : this.sessionState);
      this.root.dataset.state = state2;
      const sleepButton = this.shadow.querySelector(".wm-sleep");
      if (sleepButton) sleepButton.textContent = this.sleeping ? "\u53EB\u9192" : "\u7761\u89C9";
      this.updateStatusLine();
    }
    say(text, hold = 3600) {
      if (!text) return;
      this.bubbleText = text;
      this.bubble.textContent = text;
      const rect = this.pet.getBoundingClientRect();
      this.positionBubble(rect.left, rect.top, rect.width, rect.height);
      this.showBubble(true);
      this.win.clearTimeout(this.bubbleTimer);
      this.bubbleTimer = this.win.setTimeout(() => this.showBubble(false), hold);
    }
    showBubble(show) {
      this.root.dataset.bubble = String(Boolean(show));
    }
    pat() {
      this.sleeping = false;
      this.setReaction("pat", 2200);
      this.say(pick(LINES.pat, this.lastLine), 2400);
    }
    celebrate() {
      this.setReaction("celebrate", 3400);
      this.say(pick(LINES.celebrate, this.lastLine), 3800);
    }
    setReaction(kind, ms) {
      this.reaction = kind;
      this.render();
      this.updateStatusLine();
      this.win.clearTimeout(this.reactionTimer);
      this.reactionTimer = this.win.setTimeout(() => {
        this.reaction = null;
        this.render();
        this.updateStatusLine();
      }, ms);
    }
    toggleSleep() {
      this.sleeping = !this.sleeping;
      this.reaction = null;
      if (this.sleeping) {
        this.say(pick(LINES.sleeping, this.lastLine), 3600);
        this.resetGaze();
      } else {
        this.say("\u5514\u2026\u6211\u9192\u4E86\u3002", 2600);
      }
      this.render();
      this.updateStatusLine();
    }
    save() {
      try {
        globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(this.settings));
      } catch {
      }
    }
    dispose() {
      if (this.disposed) return;
      this.disposed = true;
      this.win.clearTimeout(this.bubbleTimer);
      this.win.clearTimeout(this.reactionTimer);
      this.win.clearTimeout(this.idleTimer);
      if (this.frame) this.win.cancelAnimationFrame(this.frame);
      this.resizeObserver?.disconnect();
      this.win.removeEventListener("resize", this.onResize);
      this.win.removeEventListener("pointermove", this.onPointerMove);
      this.doc.removeEventListener("pointerdown", this.onDocPointerDown, true);
      this.doc.removeEventListener("keydown", this.onKeyDown, true);
      try {
        delete this.host.__whaleMusume;
      } catch {
      }
      this.shadow.innerHTML = "";
    }
  };

  // src/preview/main.js
  var params = new URLSearchParams(location.search);
  var stage = document.querySelector("#stage");
  var view = new WhaleMusumeView(stage, { language: "zh" });
  var scale = Number(params.get("scale") || "1.55");
  view.settings.scale = scale;
  view.settings.explode = params.get("explode") === "1";
  view.settings.motion = params.get("motion") !== "0";
  view.settings.track = params.get("track") !== "0";
  view.applySettings({ layout: true });
  var state = params.get("state") || "idle";
  view.root.dataset.state = state;
  view.bubble.textContent = params.get("bubble") || "";
  view.root.dataset.bubble = String(Boolean(params.get("bubble")));
  if (params.get("panel") === "1") view.openPanel();
  if (params.get("hl")) view.root.dataset.hl = params.get("hl");
  var width = view.pet.getBoundingClientRect().width;
  var height = view.pet.getBoundingClientRect().height;
  view.setPosition(
    Math.max(8, (innerWidth - width) / 2),
    Math.max(8, (innerHeight - height) / 2 + (params.get("down") ? 40 : 0)),
    { persist: false }
  );
  window.__preview = { view, params };
})();
