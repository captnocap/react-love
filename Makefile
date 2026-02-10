# react-love Makefile
# Builds: QuickJS shared library + bundled React apps for both targets

QUICKJS_DIR = quickjs
NATIVE_GAME = examples/native-hud/game
LIB_DIR = $(NATIVE_GAME)/lib

.PHONY: all clean setup build build-native build-web run dev install

all: setup build

# ── Dependencies ────────────────────────────────────────

install: node_modules

node_modules:
	npm install

# ── QuickJS setup (native target only) ──────────────────

setup: $(LIB_DIR)/libquickjs.so

$(QUICKJS_DIR):
	git clone https://github.com/nicbarker/quickjs-ng.git $(QUICKJS_DIR) || \
	git clone https://github.com/nicbarker/quickjs.git $(QUICKJS_DIR) || \
	(mkdir -p $(QUICKJS_DIR) && \
	 curl -L https://bellard.org/quickjs/quickjs-2024-02-14.tar.xz | \
	 tar xJ -C $(QUICKJS_DIR) --strip-components=1)

$(LIB_DIR):
	mkdir -p $(LIB_DIR)

$(LIB_DIR)/libquickjs.so: $(QUICKJS_DIR) $(LIB_DIR)
	cd $(QUICKJS_DIR) && \
	$(CC) -shared -fPIC -O2 -o libquickjs.so \
		quickjs.c \
		libregexp.c \
		libunicode.c \
		cutils.c \
		quickjs-libc.c \
		-lm -lpthread -ldl 2>/dev/null || \
	make libquickjs.so 2>/dev/null || \
	echo "QuickJS compilation requires manual setup"
	cp $(QUICKJS_DIR)/libquickjs.so $(LIB_DIR)/ 2>/dev/null || true

# ── Build targets ───────────────────────────────────────

build: build-native build-web

build-native: node_modules
	npx esbuild \
		--bundle \
		--format=iife \
		--global-name=ReactLove \
		--target=es2020 \
		--jsx=automatic \
		--outfile=$(NATIVE_GAME)/bundle.js \
		examples/native-hud/src/main.tsx

build-web: node_modules
	npx esbuild \
		--bundle \
		--format=esm \
		--target=es2020 \
		--jsx=automatic \
		--outfile=examples/web-overlay/dist/app.js \
		examples/web-overlay/src/main.tsx

# ── Run ─────────────────────────────────────────────────

run: build-native setup
	cd $(NATIVE_GAME) && love .

# ── Dev mode (watch + run) ──────────────────────────────

dev:
	npx esbuild \
		--bundle \
		--format=iife \
		--global-name=ReactLove \
		--target=es2020 \
		--jsx=automatic \
		--outfile=$(NATIVE_GAME)/bundle.js \
		--watch \
		examples/native-hud/src/main.tsx

# ── Clean ───────────────────────────────────────────────

clean:
	rm -f $(NATIVE_GAME)/bundle.js
	rm -f examples/web-overlay/dist/app.js
	rm -rf $(LIB_DIR)
	rm -rf node_modules
