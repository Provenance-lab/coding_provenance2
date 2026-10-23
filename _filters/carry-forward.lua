-- Brought forward / carried forward: links each entry to its neighbours in the
-- book, in the order listed under `ledger-order` in _quarto.yml.

local stringify = pandoc.utils.stringify

local function escape(s)
  return (s:gsub("&", "&amp;"):gsub("<", "&lt;"):gsub(">", "&gt;"):gsub('"', "&quot;"))
end

local function cell(item, class, label)
  if not item then
    return '<div class="carry ' .. class .. '"></div>'
  end
  return string.format(
    '<div class="carry %s"><a href="%s.html"><span class="carry-label">%s</span>'
      .. '<span class="carry-entry"><span class="carry-no">%s</span> %s</span></a></div>',
    class,
    escape(stringify(item.page)),
    label,
    escape(stringify(item.entry)),
    escape(stringify(item.title))
  )
end

function Pandoc(doc)
  local order = doc.meta["ledger-order"]
  local input = quarto.doc.input_file or ""
  local page = input:match("([^/\\]+)%.qmd$")
  if not order or not page then
    return doc
  end

  local index
  for i, item in ipairs(order) do
    if stringify(item.page) == page then
      index = i
    end
  end
  if not index then
    return doc
  end

  local html = '<nav class="carry-forward" aria-label="Neighbouring entries">'
    .. cell(order[index - 1], "carry-prev", "Brought forward")
    .. cell(order[index + 1], "carry-next", "Carried forward")
    .. "</nav>"
  doc.blocks:insert(pandoc.RawBlock("html", html))
  return doc
end
