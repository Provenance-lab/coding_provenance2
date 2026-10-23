-- Gives every page `site-root`, the relative path back to the site root
-- ("" at the top, "../" one folder down), for templates and raw HTML that
-- Quarto does not rewrite, and preloads the body font from the right place.

function Meta(meta)
  local input = quarto.doc.input_file or ""
  local project = (quarto.project and quarto.project.directory) or ""
  local relative = input
  if project ~= "" and input:sub(1, #project) == project then
    relative = input:sub(#project + 2)
  end
  local _, depth = relative:gsub("[/\\]", "")
  local root = string.rep("../", depth)
  meta["site-root"] = pandoc.MetaString(root)
  quarto.doc.include_text("in-header",
    '<link rel="preload" href="' .. root .. 'site_libs/bootstrap/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>')
  -- The participant area stays out of search engines (the v1 gate is JavaScript only).
  if relative:match("^participants[/\\]") then
    quarto.doc.include_text("in-header", '<meta name="robots" content="noindex, nofollow">')
  end
  return meta
end
