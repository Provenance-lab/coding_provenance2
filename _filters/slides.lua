-- Slides: a Google Slides deck shown on the page from its share link.
--
--   ::: {.slides href="https://docs.google.com/presentation/d/…/edit?usp=sharing"}
--   :::
--
-- The deck must be shared as "Anyone with the link can view".

function Div(div)
  if not div.classes:includes("slides") then return nil end
  local href = div.attributes["href"] or ""
  local id = href:match("docs%.google%.com/presentation/d/([%w_%-]+)")
  if not id then
    quarto.log.warning("slides: not a Google Slides link: " .. href)
    return nil
  end
  local embed = "https://docs.google.com/presentation/d/" .. id .. "/embed?start=false&loop=false"
  local open = "https://docs.google.com/presentation/d/" .. id .. "/edit?usp=sharing"
  local title = div.attributes["title"] or "Slides"
  return pandoc.RawBlock("html",
    '<figure class="slides-frame">' ..
    '<div class="slides-viewport"><iframe src="' .. embed .. '" title="' .. title .. '" loading="lazy" allowfullscreen></iframe></div>' ..
    '<figcaption><a href="' .. open .. '" target="_blank" rel="noopener">Open the slides in Google Slides</a></figcaption>' ..
    '</figure>')
end
