import { type Tech } from "@prisma/client";

type sortByTypeParam = Array<Tech>;

type sortByTypeOutput = {
  [key: string]: Array<Tech>;
};

export default function sortTechsByType(list: sortByTypeParam): sortByTypeOutput {
  var result: sortByTypeOutput = {};
  list.forEach(listEl => {
    if (!result[listEl.type]) {
      result[listEl.type] = [];
    }
    result[listEl.type].push(listEl);
  });

  return result;
}
