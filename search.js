const input = args.plainTexts[0];

Safari.open(`https://www.baidu.com/s?wd=${encodeURIComponent(input)}`);