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

-- Data files: a Google Sheet or a Google Drive file shown on the page.
--
--   ::: {.data-file href="https://drive.google.com/file/d/…/view?usp=sharing" format="csv"}
--   :::
--
-- The file must be shared as "Anyone with the link can view".

local function data_file(div)
  local href = div.attributes["href"] or ""
  local format = div.attributes["format"] or ""
  local preview, open, download
  local sheet = href:match("docs%.google%.com/spreadsheets/d/([%w_%-]+)")
  local file = href:match("drive%.google%.com/file/d/([%w_%-]+)")
  if sheet then
    preview = "https://docs.google.com/spreadsheets/d/" .. sheet .. "/preview"
    open = "https://docs.google.com/spreadsheets/d/" .. sheet .. "/edit?usp=sharing"
    download = "https://docs.google.com/spreadsheets/d/" .. sheet .. "/export?format=" .. (format ~= "" and format or "xlsx")
  elseif file then
    preview = "https://drive.google.com/file/d/" .. file .. "/preview"
    open = "https://drive.google.com/file/d/" .. file .. "/view?usp=sharing"
    download = "https://drive.google.com/uc?export=download&id=" .. file
  else
    quarto.log.warning("data-file: not a Google Sheets or Drive link: " .. href)
    return nil
  end
  local label = format ~= "" and (" ." .. format) or ""
  local title = div.attributes["title"] or "Data file"
  return pandoc.RawBlock("html",
    '<figure class="file-frame">' ..
    '<div class="file-viewport"><iframe src="' .. preview .. '" title="' .. title .. '" loading="lazy"></iframe></div>' ..
    '</figure>')
end

local slides_div = Div
function Div(div)
  if div.classes:includes("data-file") then return data_file(div) end
  return slides_div(div)
end
